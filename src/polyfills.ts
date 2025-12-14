/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

// Modern browsers don't need most polyfills anymore.
// Only add polyfills for specific features you need that aren't supported in all target browsers.

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js';  // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

if (typeof SVGElement.prototype.contains === 'undefined') {
  SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
}
