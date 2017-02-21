<?hh // decl
use Decouple\Common\Contract\DB\Schema;
class :layouts:header extends :decouple:ui:base {
  protected function compose() : XHPRoot {
    return
      <header>
        <navigation:horizontal />
      </header>
    ;
  }
}
