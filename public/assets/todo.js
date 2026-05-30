document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.delete-button').forEach(function (button) {
        button.addEventListener('click', function () {
            var id = this.dataset.id;
            fetch('/todo/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Unable to delete item');
                }
                return response.json();
            })
            .then(function () {
                var listItem = button.closest('li');
                if (listItem) {
                    listItem.remove();
                }
            })
            .catch(function (error) {
                console.error(error);
                alert('Could not delete this item.');
            });
        });
    });
});