<?hh // decl
class :articles:grid_item extends :x:element {
  use XHPHelpers;
  use XHPReact;

  attribute
    :xhp:html-element,
    KeyedTraversable<string,mixed> article @required;

  protected function render(): XHPRoot {
    return 
    <a class="news--article" href={"/news/article/" . $article['id']}>
      <div class="news--article-inner">
        <h4 class="news--article-title">{$article['title']}</h4>
        <div class="news--article-image">
          <img src={$article['image']}/>
        </div>
        <div class="news--article-date">{$article['created_at']}</div>
      </div>
    </a>
    ;
  }
}
