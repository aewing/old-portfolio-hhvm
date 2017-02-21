<?hh // strict
namespace Test\DBAL;
use Decouple\Test\TestCase;
use Decouple\Common\Contract\DB\Query;
use Decouple\DBAL\DPDO\DPDOMySQLDriver;
use Decouple\Registry\Paths;
class QueryTest extends TestCase {
	public function execute(Paths $paths): void {
		$db_config = hack_require((string)$paths->get('config') . '/database.hh');
		if(!$db_config instanceof Map) {
			return;
		}
		$test_db = $db_config->get('test');
		if(!$test_db instanceof Map) {
			return;
		}
		$params = $test_db->get('params');
		if(!$params instanceof Map) {
			return;
		}
		$driver = new DPDOMySQLDriver();
		$connected = $driver->connect(
			$params,
			(string)$test_db->get('user'),
			(string)$test_db->get('password'),
		);
		$schema = $driver->schema('decouple_test');
		$table = $schema->table('articles');
		$query = $table->select();
		$failed = false;
		if(!$query instanceof Query) {
			$failed = true;
		}
		$this->assertEquals($failed, false);
	}
}
