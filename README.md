<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] for an [exponential][exponential-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_cdf" align="center" raw="F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}" alt="Cumulative distribution function for an exponential distribution."> -->

```math
F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} &amp; x \ge 0 \\ 0 &amp; x &lt; 0 \end{cases}" data-equation="eq:exponential_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/logcdf/docs/img/equation_exponential_cdf.svg" alt="Cumulative distribution function for an exponential distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-exponential-logcdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats-base-dists-exponential-logcdf' );
```

#### logcdf( x, lambda )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] for an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = logcdf( 2.0, 0.3 );
// returns ~-0.796

y = logcdf( 10.0, 0.3 );
// returns ~-0.051
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0 );
// returns NaN

y = logcdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0 );
// returns NaN
```

#### logcdf.factory( lambda )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function (CDF)][cdf] for an exponential distribution with rate parameter `lambda`.

```javascript
var mylogcdf = logcdf.factory( 0.1 );

var y = mylogcdf( 8.0 );
// returns ~-0.597

y = mylogcdf( 2.0 );
// returns ~-1.708

y = mylogcdf( 0.0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var logcdf = require( '@stdlib/stats-base-dists-exponential-logcdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 10.0, opts );
var lambda = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, λ: %0.4f, ln(F(x;λ)): %0.4f', x, lambda, logcdf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/exponential/cdf.h"
```

#### stdlib_base_dists_exponential_cdf( x, lambda )

Evaluates the natural logarithm of the [cumulative distribution function (CDF)][cdf] for an exponential distribution with rate parameter `lambda`.

```c
double out = stdlib_base_dists_exponential_logcdf( 2.0, 0.1 );
// returns ~-1.708
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_exponential_logcdf( const double x, const double lambda );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/exponential/logcdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 100.0 );
        lambda = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 100.0 );
        y = stdlib_base_dists_exponential_logcdf( x, lambda );
        printf( "x: %lf, λ: %lf, ln(F(x;λ)): %lf\n", x, lambda, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-exponential-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-exponential-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-exponential-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-exponential-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-exponential-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-exponential-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/blob/main/branches.md

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->
