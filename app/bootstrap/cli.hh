<?hh // partial
require_once "cli/functions.hh";
// Error handling
set_exception_handler('cli_exception_handler');
set_error_handler('cli_error_handler', 2047);

use Decouple\CLI\App;
use Decouple\CLI\Request\Request;
use Decouple\Registry\Paths;
use Decouple\Log\Log;

use Decouple\Singleton\Decoupler;

require_once "common.hh";
$commands = hack_require(dirname(dirname(__FILE__)) . "/config/cli/commands.hh");

set_include_path(get_include_path() . PATH_SEPARATOR . $paths->get('src') . PATH_SEPARATOR . $paths->get('commands'));

$args = new Vector($argv);
// if($args->get(0) == 'decouple.hh' || $args->get(0) == './decouple') { $args->removeKey(0); }
$request = new Request($args);

$app = new App($request, Decoupler::instance(), new Paths($paths), $commands);

// Register map of cli services
$cli_services = Map {
  "Decouple\Log\Log" => new Log((string)$paths->get('logs') . "/cli.log"),
  "Decouple\Registry\Paths" => new Paths($paths),
  "Decouple\CLI\App" => $app,
  "Decouple\CLI\Request\Request" => $request
};
$app->addServices($cli_services);
