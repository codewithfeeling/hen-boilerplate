import { identify, UserType } from "../utils";

export default class App {

    constructor() {
        /**
         * If you want to create OBJKT's with different seeds, you can access the creator and viewer wallet IDs
         * These values will only be injected once the piece has been minted
         * They will not work locally unless you manually add them as a query string to your URL
         * eg. http://localhost:3000?creator=xxx&viewer=xxxx
         * If the user is not sync, the viewer comes in as false
         */
        const creator = identify(UserType.CREATOR);
        const viewer = identify(UserType.VIEWER);
        console.log({creator, viewer});

        // Resize is essential so the content displays when the fullscreen button is clicked
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize() {
        const {innerWidth, innerHeight} = window;
        console.log('resize', {innerWidth, innerHeight});
    }
}