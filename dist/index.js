/** @license Apache-2.0 */

'use strict';

/**
* Natural logarithm of the cumulative distribution function (CDF) for an exponential distribution.
*
* @module @stdlib/stats-base-dists-exponential-logcdf
*
* @example
* var logcdf = require( '@stdlib/stats-base-dists-exponential-logcdf' );
*
* var y = logcdf( 2.0, 0.1 );
* // returns ~-1.708
*
* var mylogCDF = logcdf.factory( 0.5 );
* y = mylogCDF( 3.0 );
* // returns ~-0.252
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
