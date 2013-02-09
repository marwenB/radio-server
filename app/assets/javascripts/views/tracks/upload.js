Kigendan.Views.Upload = Backbone.View.extend({

    template: JST['tracks/upload'],

    tagName: 'div',

    className: 'upload',

    initialize: function() {
        console.log("Kigendan.Models.Upload initialized");
    },

    render: function() {
        this.$el.html(this.template({ file: this.options.file, progress: this.progress }));
        this.$el.find('.upload-progress').css('width', this.options.progress + '%');
        return this;
    }

});