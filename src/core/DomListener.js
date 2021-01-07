export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DOmListener`);
        }
        this.$root = $root
        this.listeners = listeners
    }
    initDomListeners() {
        console.log(this.listeners);
    }

    removeDOMListeners() { }
}