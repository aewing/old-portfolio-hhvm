<?hh // strict
namespace Test\DBAL;
use Decouple\Test\TestCase;
use Decouple\DBAL\DPDO\DPDOMySQLDriver;
use Decouple\Common\Contract\DB\Table;
use Decouple\DBAL\Table\Create\TableCreateInterface;
use Decouple\Common\Contract\DB\ExecutableTableStructure;
use Decouple\CLI\Console;
use Decouple\Registry\Paths;
class AwaitableTest extends TestCase {
	public async function execute(Paths $paths): Awaitable<void> {
		$db_config = hack_require((string)$paths->get('config') . '/database.hh');
		if (!$db_config instanceof Map) {
			return;
		}
		$test_db = $db_config->get('test');
		if(!$test_db instanceof Map) {
			return;
		}
		$driver = new DPDOMySQLDriver();
		$params = $test_db->get('params');
		if(!$params instanceof Map) {
			return;
		}
		$connected = $driver->connect(
			$params,
			(string)$test_db->get('user'),
			(string)$test_db->get('password'),
		);
		$schema = $driver->schema('decouple_test');
		$articles = $schema->table('articles');
		$authors = $schema->table('authors');

		if (!$authors->exists()) {
			Console::output('Attempting to create authors table');
			$res = $authors->create(
				function (ExecutableTableStructure $table) {
					$table->increments('id');
					$table->string('name', 55)->unique();
					$table->string('email', 255)->unique();
					$table->timestamps();
					$table->softDeletes();
				},
			);
		}

		if (!$articles->exists()) {
			Console::output('Attempting to create articles table');
			$res = $articles->create(
				function (ExecutableTableStructure $table) {
					$table->increments('id');
					$table->string('title', 55)->unique();
					$table->text('content');
					$table->string('image', 255);
					$table->integer('author_id')->unsigned();
					$table->foreign('author_id')
						->references('id')
						->on('authors')
						->onDelete('cascade');
					$table->timestamps();
					$table->softDeletes();
				},
			);
			$this->assertEquals($res, true);
		}

		// Clear tables
		$authors->delete()->execute();
		$articles->delete()->execute();

		$author_ids = [];
		$article_ids = [];

		// Seed tables
		Console::output('Inserting author');
		$author_id = $authors->insert(
			Map {
			'id' => 1,
				'name' => 'Administrator',
				'email' => 'drew@phenocode.com',
		},
		);
		Console::output('Inserting awaitable 1');
		await $article_ids[] = $articles->awaitable()->insert(
			Map {
			'author_id' => 1,
				'title' => 'Title',
				'content' => 'Content',
				'image' => 'http://lorempixel.com/400/200',
		},
		);
		Console::output('Inserting awaitable 2');
		await $article_ids[] = $articles->awaitable()->insert(
			Map {
			'author_id' => 1,
				'title' => 'Title 2',
				'content' => 'Content 2',
				'image' => 'http://lorempixel.com/400/200',
		},
		);
		Console::output('Inserting awaitable 3');
		await $article_ids[] = $articles->awaitable()->insert(
			Map {
			'author_id' => 1,
				'title' => 'Title 3',
				'content' => 'Content 3',
				'image' => 'http://lorempixel.com/400/200',
		},
		);

		Console::output('Asserting count(articles) == 3');
		$this->assertEquals(count($article_ids), 3);

		Console::output('Cleaning up');
		$articles->drop();
		$authors->drop();
	}
}
