/**
 * Created by User on 5/30/2017.
 */
// Model
function Category(id, value, items) {
    this.id = id || "";
    this.value = value || "";
    this.items = items || [];
}

// Exporting
module.exports = Category;