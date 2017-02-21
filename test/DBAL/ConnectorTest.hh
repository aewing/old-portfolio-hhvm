<?hh // strict
namespace Test\DBAL;
use Decouple\Console\CLI\CLI;
use Decouple\Test\TestCase;
use Decouple\DBAL\DPDO\DPDOConnector;
use Decouple\Registry\Paths;
class ConnectorTest extends TestCase {
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
		$connector = new DPDOConnector();
		$connected = $connector->connect(
			$params,
			(string)$test_db->get('user'),
			(string)$test_db->get('password'),
		);
		$this->assertEquals($connected, true);
	}
}
