// Galerie na úvodní stránce: šipky posouvají o jednu fotku
// a počítadlo ukazuje, která fotka je právě vidět.
$(function() {
    $('.crc-gallery').each(function() {
        var $gallery = $(this);
        var track = $gallery.find('.crc-gallery__track')[0];
        var count = $gallery.find('.crc-gallery__slide').length;

        function update() {
            var index = Math.round(track.scrollLeft / track.clientWidth);
            $gallery.find('.crc-gallery__current').text(index + 1);
            $gallery.find('[data-gallery-step="-1"]').prop('disabled', index === 0);
            $gallery.find('[data-gallery-step="1"]').prop('disabled', index === count - 1);
        }

        $gallery.on('click', '[data-gallery-step]', function() {
            track.scrollBy({ left: $(this).data('gallery-step') * track.clientWidth });
        });
        $(track).on('scroll', update);
        update();
    });
});
