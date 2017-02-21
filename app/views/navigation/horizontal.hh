<?hh // strict
use Decouple\Common\Contract\DB\Schema;
class :navigation:horizontal extends :x:element {
  use XHPAsync;
  protected async function asyncRender(): Awaitable<XHPRoot> {
    $out =
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo m-l-1">PHENOCode</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="mdi mdi-menu"></i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/technologies">Technologies</a></li>
            <li><a href="/open-source">Open Source</a></li>
            <li><a href="/examples">Examples</a></li>
            <li><a href="/clients">Clients</a></li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    ;
    return $out;
  }
}
