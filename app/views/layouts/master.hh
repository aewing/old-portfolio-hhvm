<?hh // strict
use Decouple\Common\Contract\DB\Schema;
class :layouts:master extends :decouple:ui:base {
  attribute
    Schema schema @required;

  protected string $title = '';
  protected Map<string,(string,string,bool)> $scripts = Map {};
  protected Map<string,(string,string,bool)> $styles = Map {};

  protected function compose() : XHPRoot {
    $head =
      <head>
	      <title>{$this->getTitle()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="/assets/js/head.min.js"></script>
      </head>
      ;
    $this->loadStyles($head);

    $body = <body>
      {$this->getChildren()}
      <script src="https://use.fortawesome.com/3810188c.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
      <script src="https://www.callus.io/embed/1335/1302.js" async={true}></script>
    </body>;
    $this->loadScripts($body);

    return
      <html>
        {$head}
        {$body}
      </html>
    ;
  }

  public function getTitle() : string {
    return $this->title;
  }

  public function setTitle(string $title) : void {
    $this->title = $title;
  }

  public function addScript(string $name, string $src, string $type='text/javascript', bool $raw=false) : void {
    $this->scripts->set($name, tuple($src, $type, $raw));
  }

  public function removeScript(string $name) : void {
    $this->scripts->remove($name);
  }

  public function loadScripts(:xhp $head) : void {
    foreach($this->scripts as $name => $script) {
      if($script[2]) {
        $tag = $script[0];
      } else {
        $tag = <script></script>;
        $tag->setAttribute('src', $script[0]);
        $tag->setAttribute('type', $script[1]);
      }
      $head->appendChild($tag);
    }
  }

  public function addStyle(string $name, string $src, string $media='screen', bool $raw=false) : void {
    $this->styles->set($name, tuple($src, $media, $raw));
  }

  public function removeStyle(string $name) : void {
    $this->styles->remove($name);
  }

  public function loadStyles(:xhp $head) : void {
    foreach($this->styles as $name => $style) {
      if($style[2]) {
        $tag = $style[1];
      } else {
        $tag = <link rel="stylesheet"/>;
        $tag->setAttribute('href', $style[0]);
        $tag->setAttribute('media', $style[1]);
      }
      $head->appendChild($tag);
    }
  }
}
