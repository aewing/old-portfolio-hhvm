<?hh // partial
namespace Test\DBAL;
use Decouple\Test\TestCase;
use Decouple\DBAL\DPDO\DPDOMySQLDriver;
use Decouple\Common\Contract\DB\Schema;
use Decouple\Registry\Paths;
class SchemaTest extends TestCase {
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
		$failed = false;
		if(!$schema instanceof Schema) {
			$failed = true;
		}
		$this->assertEquals($failed, false);
	}
}
