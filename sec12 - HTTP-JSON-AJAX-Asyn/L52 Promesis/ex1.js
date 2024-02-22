el.addEventListener("click", submitForm);

// callback pyramid of dom
movePLayer(100, 'Left', function() {
    movePLayer(400, 'Left', function() {
        movePLayer(10, 'Right', function() {
            movePLayer(330, 'Left', function() {
            });
        });
    });
});

movePLayer(100, 'Left')
    .then(() => movePLayer(400, 'Left'))
    .then(() => movePLayer(10, 'Right'))
    .then(() => movePLayer(330, 'Left'))