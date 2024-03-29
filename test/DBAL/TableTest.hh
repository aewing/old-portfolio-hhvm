<?hh // strict
namespace Test\DBAL;
use Decouple\Test\TestCase;
use Decouple\DBAL\DPDO\DPDOMySQLDriver;
use Decouple\Common\Contract\DB\Table;
use Decouple\DBAL\Table\Create\TableCreateInterface;
use Decouple\Common\Contract\DB\ExecutableTableStructure;
use Decouple\CLI\Console;
use Decouple\Registry\Paths;
class TableTest extends TestCase {
	public function execute(Paths $paths): void {

		$db_config = hack_require((string)$paths->get('config') . '/database.hh');
		if(!$db_config instanceof Map) {
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
		$table = $schema->table('articles');
		$failed = false;
		if(!$table instanceof Table) {
			$failed = true;
		}
		Console::output('Asserting Driver->schema()->table() returns instanceof Decouple\DBAL\Table\TableInterface');
		$this->assertEquals($failed, false);

		if($table->exists()) {
			Console::output('Attempting to drop articles table');
			$table->drop();
		}

		Console::output('Attempting to create articles table');
		$res = $table->create(function(ExecutableTableStructure $table) {
			$table->increments('id');
			$table->string('title')->unique();
			$table->text('content');
			$table->softDeletes();
			$table->timestamps();
		});
		$this->assertEquals($res, true);

		Console::output('Attempting to drop articles table');
		$table->drop();
	}
}
