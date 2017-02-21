<?hh // strict
use XHPRoot;
class :layouts:front extends :layouts:master {
  protected function compose() : XHPRoot {
    $this->setTitle('aewing.io - Portfolio of Andrew Ewing');
    $this->addStyle('main', '/assets/css/app.min.css');
    $this->addScript('bundle', '/assets/js/app.min.js');
    $this->appendChild(<div id="app" />);
    return parent::compose();
  }
}
