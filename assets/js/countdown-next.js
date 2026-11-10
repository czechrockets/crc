// Po vypršení odpočtu (např. začátek registrací) ho přepne na další termín
// z data-countdown-next a nadpis na text z data-countdown-next-title.
$(function() {
    // Vnořené ready, aby se to spustilo až po inicializaci odpočtu ve script.min.js
    $(function() {
        $('[data-countdown-next]').each(function() {
            var $this = $(this);
            function switchToNext() {
                $this.find('.countdown-title').text($this.data('countdown-next-title'));
                $this.countdown($this.data('countdown-next'));
            }
            if (new Date() >= new Date($this.data('countdown'))) {
                switchToNext();
            } else {
                $this.one('finish.countdown', switchToNext);
            }
        });
    });
});
