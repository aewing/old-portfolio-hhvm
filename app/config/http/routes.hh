<?hh // partial
use Decouple\Singleton\Router;
Router::get('(.*)', 'FrontController@index');