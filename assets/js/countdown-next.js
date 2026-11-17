// Odpočet na úvodní stránce běží postupně k termínům ze seznamu
// .crc-countdown__phases. Když jeden termín vyprší, přepne na další a změní nadpis.
// Tlačítko registrace je vidět jen u termínu označeného data-register.
$(function() {
    // Vnořené ready, aby se to spustilo až po inicializaci odpočtu ve script.min.js
    $(function() {
        $('.boxed-countdown').each(function() {
            var $this = $(this);
            var $phases = $this.find('.crc-countdown__phases li');

            function start() {
                var now = new Date();
                var $phase = $phases.filter(function() {
                    return new Date($(this).attr('data-until')) > now;
                }).first();
                // Po posledním termínu zůstane odpočet na nulách u posledního nadpisu.
                // Handler se odpojí, jinak by se finish u minulého data volal pořád dokola.
                if (!$phase.length) {
                    $phase = $phases.last();
                    $this.off('finish.countdown', start);
                }
                $this.find('.countdown-title').text($phase.text());
                $this.find('.crc-countdown__cta').prop('hidden', !$phase.is('[data-register]'));
                $this.countdown($phase.attr('data-until'));
            }

            $this.on('finish.countdown', start);
            start();
        });
    });
});
