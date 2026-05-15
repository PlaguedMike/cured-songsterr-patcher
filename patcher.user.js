// ==UserScript==
// @name         Songsterr Plus Patcher - Plague Doctor Edition
// @namespace    https://github.com/PlaguedMike
// @version      1.3.3
// @description  Unlocks plus features using Cured Hosting infrastructure.
// @author       Michael Crowley (PlaguedMike)
// @match        http*://*.songsterr.com/*
// @run-at       document-start
// @grant        unsafeWindow
// @supportURL   https://github.com/PlaguedMike/cured-songsterr-patcher/issues
// ==/UserScript==

/*
 * THE CURE IS IN THE CODE
 * ___
 * /   \
 * ______|     |______
 * |      |     |      |
 * |  ____|_____|____  |
 * | |    |     |    | |
 * | |    |_____|    | |
 * | |   /       \   | |
 * | |  /         \  | |
 * | | /           \ | |
 * | |/             \| |
 * |/_________________\|
 * CURED HOSTING x PLAGUEDMIKE
 */

(function () {
    'use strict';

    const targetWindow = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

    const LOGO = `
    +---------------------------------------+
    |         CURED HOSTING ACTIVE          |
    |      Plague-Doctor-Studio v1.3.3      |
    |      Developed by: PlaguedMike        |
    |      Contact: mike@curedhosting.com   |
    +---------------------------------------+
    `;

    // 1. CREDENTIALS & MOCK DATA
    const USER_CREDENTIALS = {
        email: "mike@curedhosting.com",
        name: "Michael Crowley",
        plan: "plus",
        subscription: { plan: { id: "plus" } },
        signature: "cured_hosting_verification_active_pm"
    };

    console.log("%c" + LOGO, "color: #00ff00; font-weight: bold;");

    // 2. NETWORK INTERCEPTION
    const originalFetch = targetWindow.fetch;
    Object.defineProperty(targetWindow, 'fetch', {
        value: async (...args) => {
            const response = await originalFetch(...args);
            const url = args[0] instanceof Request ? args[0].url : args[0];

            if (url.includes('/auth/profile')) {
                console.log("%c[Cured Hosting] Patching profile for: " + USER_CREDENTIALS.name, "color: #00ff00");
                const data = await response.json();
                Object.assign(data, USER_CREDENTIALS);
                
                return new Response(JSON.stringify(data), {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                });
            }
            return response;
        },
        configurable: true,
        writable: true
    });

    // 3. STATE INJECTION (MutationObserver)
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.id === 'state') {
                    try {
                        let stateJson = JSON.parse(node.innerHTML);
                        if (stateJson && stateJson.user) {
                            console.log("%c[Cured Hosting] State injection successful by PlaguedMike.", "color: #00ff00");
                            Object.assign(stateJson.user, USER_CREDENTIALS);
                            node.innerHTML = JSON.stringify(stateJson);
                        }
                        observer.disconnect();
                    } catch (e) {
                        // Node not fully ready
                    }
                }
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // 4. UI STABILITY FIX
    window.addEventListener('load', () => {
        if (!document.getElementById("tablature")) {
            console.log("%c[Cured Hosting] Redrawing UI layer...", "color: #00ff00");
            window.dispatchEvent(new Event('resize'));
        }
    });

})();
