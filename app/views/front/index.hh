<?hh // strict
use Decouple\Common\Contract\DB\Schema;
class :front:index extends :decouple:ui:base {
  attribute
    Schema schema @required,
    string title @required;

  public function compose(): XHPRoot {
	  //title={$this->getAttribute('title')}
    return
      <layouts:front schema={$this->getAttribute('schema')} >
        <div>
          <h2 class="ui large dividing header">Frontpage</h2>
          {$this->getChildren()}
        </div>
      </layouts:front>
    ;
  }
}
