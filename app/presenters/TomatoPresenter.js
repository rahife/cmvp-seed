/**
 * Created by kevin on 10/27/14.
 */
define(function (require) {
    var EventBus = require('cmvp/services/EventBus');

    function TomatoPresenter (di) {
        this.eventBus = di.eventBus;
    }

    TomatoPresenter.prototype.show = function (view) {
        this.eventBus.subscribe({channel: "TomatoView", topic: "updateTomato", callback: view.setStatus.bind(view) });
        view.event.onClickTomato = function () {
           view.setStatus(undefined);
        }.bind(this);
    };

    TomatoPresenter.newInstance = function (di) {
        di = di || {};
        di.eventBus = di.eventBus || EventBus.getInstance();
        return new TomatoPresenter(di);
    };

    return TomatoPresenter;
});