<?hh // strict
namespace Test\DBAL;
use Decouple\Console\CLI\CLI;
use Decouple\Test\TestCase;
use Decouple\DBAL\DPDO\DPDOMySQLDriver;
use Decouple\Registry\Paths;
class DriverTest extends TestCase {
	public function __construct() {}
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
			$this->assertEquals($connected, true);
			$schema = $driver->schema('decouple_test');
			if(!$schema->exists()) {
				$schema->create();
			}
			$this->assertEquals($schema->exists(), true);
		}
}
