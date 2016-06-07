System.register(["angular2/platform/browser", "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var Article, ArticleComponent, RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                return Article;
            }());
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        host: {
                            class: 'row'
                        },
                        template: "\n\t\t<div class=\"four wide column center aligned votes\">\n\t\t  <div class=\"ui statistic\">\n\t\t    <div class=\"value\">\n\t\t      {{ article.votes }}\n\t\t    </div>\n\t\t    <div class=\"label\">\n\t\t      Points\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"twelve wide column\">\n\t\t  <a class=\"ui large header\">\n\t\t    {{ article.title }}\n\t\t  </a>\n\t\t  <ul class=\"ui big horizontal list voters\">\n\t\t    <li class=\"item\">\n\t\t      <a href (click)=\"voteUp()\">\n\t\t        <i class=\"arrow up icon\"></i>\n\t\t          upvote \n\t\t        </a>\n\t\t    </li>\n\t\t    <li class=\"item\"> \n\t\t      <a href (click)=\"voteDown()\">\n\t\t        <i class=\"arrow down icon\"></i>\n\t\t        downvote\n\t\t      </a>\n\t\t    </li>\n\t\t  </ul>\n\t\t</div>\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new Article('Angular 1', 'https://angular.io', 10),
                        new Article('Angular 2', 'https://angular.io', 10),
                        new Article('Angular 3', 'https://angular.io', 10)
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                    this.articles.push(new Article(title.value, link.value, 0));
                    title.value = '';
                    link.value = '';
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [ArticleComponent],
                        template: "\n\t\t<form class=\"ui large form segment\">\n\t\t  <h3 class=\"ui header\">Add Link</h3>\n\n\t\t  <div class=\"field\">\n\t\t    <label for=\"title\">Title:</label>\n\t\t    <input name=\"title\" #newtitle>\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label for=\"link\">Link:</label>\n\t\t    <input name=\"link\" #newlink>\n\t\t  </div>  \n\t\t  <button (click)=\"addArticle(newtitle, newlink)\"\n\t\t  \tclass=\"ui positive right floated button\">\n\t\t  \tSubmit link\n\t\t  </button>\n\t\t</form>\n\t\t<div class=\"ui grid posts\">\n\t      <reddit-article *ngFor=\"#article of articles\"\n        [article]=\"article\"></reddit-article>\n\t    </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            browser_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map