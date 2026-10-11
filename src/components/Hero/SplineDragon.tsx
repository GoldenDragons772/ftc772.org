"use client";

import React, { useEffect, useRef, useState } from "react";

interface SplineDragonProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

// ═════════════════════════════════════════════════════════════════════════════
// FAITHFUL HERALDIC DRAGON VECTOR SILHOUETTE
// Exactly extracted from the authentic heraldic coiled reference image:
// - Slender horned head & open maw
// - Slender S-curving neck & dorsal spines
// - Segmented underbelly armor plates with crisp negative-space scale slits
// - High-arching ribbed bat wing with 3 webbed finger arches
// - Grasping raptor fore-talons and muscular perched hind leg
// - Wide sweeping circular coiled tail with dorsal spines & segmented plates
// ═════════════════════════════════════════════════════════════════════════════
const HERALDIC_DRAGON_PATH =
  "M 98.498 30.687 C 97.399 31.525, 92.489 34.185, 87.586 36.599 C 82.683 39.012, 77.958 41.631, 77.086 42.417 C 76.214 43.204, 72.903 44.817, 69.730 46.003 C 64.960 47.785, 63.616 48.832, 61.977 52.046 C 59.703 56.503, 56.834 58.393, 53.352 57.727 C 51.672 57.406, 50.480 57.905, 49.464 59.354 C 47.698 61.876, 47.530 69.130, 49.200 70.800 C 50.688 72.288, 54.653 72.370, 55.542 70.932 C 55.905 70.344, 56.832 70.105, 57.601 70.400 C 58.401 70.707, 59 70.320, 59 69.494 C 59 67.370, 64.340 64.978, 68.700 65.150 C 71.414 65.257, 71.763 65.414, 69.921 65.700 C 68.503 65.920, 65.192 67.877, 62.562 70.050 C 59.933 72.222, 57.381 74, 56.891 74 C 54.763 74, 56.263 76.866, 58.981 77.992 C 62.526 79.461, 67.170 78.606, 66.410 76.625 C 65.672 74.702, 71.639 70.001, 74.827 69.994 C 79.528 69.985, 84.853 68.003, 86.788 65.542 C 87.840 64.205, 90.266 62.853, 92.298 62.472 C 98.448 61.318, 99.940 57.002, 94.191 56.998 C 91.969 56.996, 91.467 56.517, 91.310 54.248 C 91.146 51.862, 91.893 51.073, 96.972 48.260 C 103.435 44.681, 109 40.339, 109 38.876 C 109 38.355, 107.987 38.477, 106.750 39.146 C 105.513 39.815, 101.125 41.348, 97 42.551 C 92.875 43.755, 88.600 45.049, 87.500 45.426 C 85.974 45.950, 86.092 45.685, 88 44.309 C 92.867 40.799, 99.940 33.763, 100.557 31.820 C 101.401 29.161, 100.878 28.873, 98.498 30.687 M 144.625 33.488 C 128.121 36.925, 113 43.618, 113 47.486 C 113 48.133, 114.049 49.223, 115.331 49.909 C 119.129 51.942, 121 56.189, 121 62.779 C 121 74.095, 115.469 84.093, 106.824 88.400 C 101.797 90.906, 95.552 92.201, 98.995 90.024 C 100.827 88.866, 99.376 87.630, 90.703 82.956 C 85.196 79.989, 84.782 79.913, 82.453 81.439 C 81.104 82.323, 80 83.407, 80 83.849 C 80 84.976, 83.748 88.255, 88.750 91.505 C 93.122 94.345, 94.134 96, 91.500 96 C 89.283 96, 82.397 103.282, 81.596 106.473 C 81.105 108.430, 81.405 109.790, 82.624 111.137 C 84.258 112.943, 84.235 113.237, 82.173 116.906 C 80.978 119.032, 80 121.004, 80 121.287 C 80 121.571, 81.501 122.688, 83.336 123.771 C 85.171 124.854, 87.843 126.506, 89.273 127.443 C 91.828 129.117, 91.898 129.097, 93.351 126.289 C 94.163 124.717, 95.149 121.646, 95.541 119.465 C 95.982 117.005, 97.243 114.687, 98.862 113.356 C 100.970 111.625, 101.450 110.402, 101.361 107 C 101.290 104.301, 101.560 103.275, 102.110 104.144 C 102.583 104.890, 102.976 106.305, 102.985 107.290 C 103 109.059, 106.347 116.381, 108.198 118.696 C 109.290 120.060, 113.384 118.868, 116.126 116.386 C 117.560 115.088, 117.600 114.348, 116.458 110.206 C 115.744 107.618, 114.870 103.769, 114.516 101.653 C 113.892 97.921, 113.815 97.858, 111.936 99.558 C 108.794 102.402, 109.727 99.635, 112.953 96.545 C 116.696 92.959, 124.599 91.852, 128.449 94.374 C 131.799 96.569, 132.676 96.428, 133.391 93.577 C 133.726 92.244, 135.216 89.708, 136.703 87.941 C 142.047 81.591, 150.458 80.275, 158.472 84.536 C 162.554 86.707, 163.139 86.815, 162.528 85.286 C 160.801 80.963, 160.756 72.372, 162.444 69.107 C 164.481 65.169, 169.993 62.575, 174.702 63.339 C 178.553 63.964, 178.651 63.723, 176.035 60.049 C 172.830 55.548, 171.418 48.820, 172.918 45.199 C 174.660 40.992, 177.135 38.985, 183.052 36.982 L 188.108 35.271 183.804 34.077 C 176.954 32.176, 152.676 31.812, 144.625 33.488 M 134.122 46.390 C 143.823 47.895, 154.612 50.969, 162.617 54.509 C 169.736 57.658, 169.505 56.787, 162.250 53.129 C 153.452 48.692, 143.656 46.042, 134.135 45.523 L 125.500 45.052 134.122 46.390 M 98 49.774 C 96.125 50.383, 93 53.060, 93 54.057 C 93 54.468, 94.350 55.275, 96 55.850 C 101.266 57.686, 99.575 62.335, 93.177 63.615 C 89.163 64.417, 87.614 66.325, 88.407 69.487 C 88.976 71.753, 89.531 72, 94.051 72 C 98.768 72, 106.897 74.436, 105.810 75.524 C 105.536 75.797, 103.385 75.342, 101.030 74.511 C 96.460 72.898, 91.203 72.561, 89.400 73.765 C 88.795 74.169, 87.795 75.459, 87.178 76.631 C 86.142 78.601, 86.659 79.113, 94.005 83.381 C 98.377 85.922, 102.396 88, 102.936 88 C 103.476 88, 104.705 85.784, 105.667 83.076 C 107.165 78.857, 107.672 78.289, 109.208 79.111 C 110.714 79.918, 111 79.661, 111 77.503 C 111 76.091, 110.348 73.375, 109.551 71.468 C 108.127 68.060, 108.145 68, 110.551 68 C 111.898 68, 112.998 67.662, 112.996 67.250 C 112.987 65.369, 108.926 60.111, 107.014 59.504 C 104.340 58.656, 104.897 56.733, 108.031 55.993 L 110.413 55.430 107.337 53.240 C 103.427 50.456, 99.916 49.152, 98 49.774 M 69.700 53.237 C 66.770 54.245, 66.523 56.278, 69.265 56.810 C 70.145 56.981, 71.382 56.155, 72.014 54.975 C 73.461 52.269, 73.164 52.046, 69.700 53.237 M 132.008 56.227 C 135.579 58.552, 142.531 64.290, 147.457 68.977 C 152.655 73.923, 155.101 75.821, 153.286 73.500 C 148.028 66.778, 139.808 59.302, 133.559 55.559 C 125.279 50.599, 124.128 51.096, 132.008 56.227 M 126.036 59.500 C 126.022 60.050, 126.520 62.300, 127.143 64.500 C 127.765 66.700, 128.843 72.100, 129.538 76.500 C 130.579 83.091, 130.816 83.707, 130.884 80 C 130.975 74.981, 128.663 62.968, 127.084 60.257 C 126.521 59.291, 126.050 58.950, 126.036 59.500 M 51 63.500 C 51 64.325, 51.177 65, 51.393 65 C 51.609 65, 52.045 64.325, 52.362 63.500 C 52.678 62.675, 52.501 62, 51.969 62 C 51.436 62, 51 62.675, 51 63.500 M 75.035 88.683 C 72.129 92.377, 72.777 94.119, 78.012 96.683 C 83.687 99.464, 84.854 99.457, 88.316 96.624 L 91.131 94.320 84.746 90.160 C 81.234 87.872, 78.087 86, 77.753 86 C 77.419 86, 76.195 87.207, 75.035 88.683 M 41.441 90.468 C 39.542 91.905, 39.547 91.937, 41.673 91.968 C 42.869 91.986, 45.250 93.181, 46.966 94.624 C 50.289 97.421, 50.485 98.944, 47.262 96.931 C 44.582 95.258, 39.899 96.952, 38.027 100.273 C 36.120 103.656, 37.148 104.605, 40.406 102.470 C 42.119 101.347, 43.883 101.005, 45.658 101.450 L 48.330 102.121 45.192 104.029 C 41.734 106.132, 40.455 109.354, 41.721 112.774 C 42.510 114.909, 42.623 114.856, 44.430 111.501 C 45.890 108.790, 46.943 108, 49.098 108 C 50.629 108, 52.174 108.472, 52.530 109.049 C 52.973 109.765, 53.624 109.727, 54.589 108.926 C 55.725 107.983, 56 108.151, 56 109.789 C 56 110.907, 57.407 113.006, 59.126 114.452 C 62.085 116.942, 62.351 116.992, 64.126 115.386 C 65.157 114.453, 66 114.183, 66 114.786 C 66 115.389, 65.550 116.160, 65 116.500 C 63.267 117.571, 63.909 118.939, 66.443 119.575 C 70.140 120.503, 71.227 119.350, 69.630 116.193 C 68.881 114.712, 67.967 111.843, 67.601 109.817 C 67.041 106.721, 66.370 105.947, 63.400 104.967 C 60.314 103.949, 59.675 104.035, 58.359 105.650 C 57.530 106.668, 57.160 106.899, 57.537 106.165 C 57.915 105.431, 57.531 103.406, 56.685 101.665 C 55.839 99.924, 54.601 97.016, 53.933 95.203 C 51.986 89.918, 45.446 87.439, 41.441 90.468 M 134.850 94.606 C 133.361 97.972, 132.515 98.915, 131.706 98.106 C 129.516 95.916, 129 97.119, 129 104.421 C 129 111.820, 129.009 111.843, 131.941 112.487 C 135.129 113.187, 139 111.667, 139.001 109.715 C 139.003 106.793, 145.093 95.991, 147.915 93.905 C 151.831 91.009, 150.524 90.036, 142.694 90.015 L 136.888 90 134.850 94.606 M 148.598 95.102 C 145.860 97.256, 140 107.730, 140 110.471 C 140 111.312, 140.563 112.020, 141.250 112.044 C 141.938 112.069, 140.700 113.018, 138.500 114.155 C 127.579 119.796, 125.053 126.425, 131.728 131.927 C 133.778 133.617, 136.253 135, 137.228 135 C 138.203 135, 139 135.450, 139 136 C 139 137.572, 129.225 137.168, 125.921 135.459 C 124.282 134.612, 122.435 134.231, 121.816 134.614 C 121.148 135.027, 120.968 134.861, 121.373 134.205 C 122.356 132.615, 118.474 130.843, 115.594 131.566 C 114.248 131.904, 112.352 133.059, 111.380 134.133 C 109.825 135.851, 109.811 136.010, 111.265 135.452 C 113.215 134.704, 120 136.743, 120 138.078 C 120 138.585, 119.662 139.034, 119.250 139.077 C 115.970 139.411, 114.260 140.196, 112.751 142.059 C 111.011 144.208, 110.316 147.500, 111.750 146.801 C 116.693 144.393, 117.971 143.483, 118.338 142.111 C 118.702 140.746, 118.786 140.768, 118.884 142.250 C 119.018 144.267, 119.789 144.386, 123.685 142.995 L 126.500 141.989 124.082 144.041 C 121.866 145.922, 121.797 146.226, 123.264 147.693 C 124.730 149.159, 125.126 149.072, 128.009 146.646 C 131.747 143.500, 133.508 143.183, 132.043 145.919 C 131.297 147.314, 131.356 147.990, 132.258 148.390 C 132.941 148.694, 132.600 148.842, 131.500 148.721 C 129.115 148.458, 128.293 151.810, 129.972 154.948 C 131.530 157.859, 133 157.489, 133 154.187 C 133 152.367, 134.059 150.360, 136 148.500 C 137.650 146.919, 139 145.112, 139 144.483 C 139 143.792, 141.006 143.295, 144.081 143.225 C 152.318 143.038, 154.042 140.330, 149 135.500 C 145.657 132.297, 145.239 131, 147.550 131 C 150.198 131, 154.828 128.117, 155.480 126.062 C 155.861 124.862, 156.671 124.320, 157.568 124.664 C 158.425 124.993, 159.864 124.172, 161.034 122.684 C 164.218 118.636, 170.879 113.772, 174.157 113.102 L 177.170 112.486 175.068 109.813 C 173.912 108.343, 171.174 105.722, 168.983 103.987 L 165.001 100.833 158.525 107.051 C 154.963 110.472, 152.289 113.659, 152.583 114.135 C 152.877 114.611, 152.641 115, 152.059 115 C 151.477 115, 151 114.590, 151 114.090 C 151 112.253, 159.100 103, 162.038 101.481 C 165.726 99.573, 165.266 98.675, 158.962 95.481 C 153.004 92.462, 152.001 92.425, 148.598 95.102 M 119.500 94.713 C 115.966 95.563, 115.698 96.630, 116.966 104.784 C 118.546 114.939, 118.717 115.193, 123.160 113.966 C 126.451 113.057, 126.781 112.618, 127.365 108.351 C 128.658 98.918, 128.243 96.043, 125.435 94.975 C 122.740 93.951, 122.680 93.948, 119.500 94.713 M 70.582 97.181 C 70.357 97.906, 69.922 99.954, 69.615 101.730 C 68.957 105.545, 70.832 107, 76.409 107 C 79.324 107, 80.220 106.475, 81.486 104.026 C 83.021 101.059, 83.016 101.049, 79.262 99.155 C 73.445 96.220, 71.048 95.675, 70.582 97.181 M 69 109.032 C 69 111.424, 71.969 116.703, 74.824 119.386 L 77.894 122.272 80.071 117.791 C 82.164 113.482, 82.181 113.206, 80.509 110.654 C 79.020 108.381, 78.068 108, 73.885 108 C 71.194 108, 69 108.463, 69 109.032 M 99.304 114.250 C 97.100 116.676, 95.291 125, 96.968 125 C 97.513 125, 99.769 124.276, 101.980 123.391 C 106.453 121.602, 106.984 119.804, 104.474 114.950 C 102.643 111.408, 101.969 111.317, 99.304 114.250 M 167.669 118.250 C 164.584 120.588, 162.047 123.047, 162.030 123.715 C 162.014 124.383, 160.988 125.456, 159.750 126.100 C 158.512 126.744, 157.369 127.378, 157.209 127.509 C 157.050 127.641, 157.881 129.380, 159.058 131.374 C 161.336 135.234, 165.521 136.413, 166.635 133.508 C 167.340 131.671, 179.628 127.747, 182.160 128.551 C 183.197 128.880, 184 128.647, 184 128.018 C 184 124.930, 176.608 114, 174.520 114 C 173.837 114, 170.754 115.912, 167.669 118.250 M 76.534 125.152 L 73.878 127.241 75.939 129.435 C 77.073 130.642, 78 131.961, 78 132.366 C 78 132.771, 76.936 131.955, 75.635 130.552 C 72.937 127.640, 72.104 127.472, 69.565 129.329 C 67.920 130.532, 67.874 131.030, 69.090 134.579 C 69.828 136.736, 70.511 138.639, 70.608 138.809 C 71.030 139.549, 78 135.997, 78 135.043 C 78 134.315, 78.555 134.330, 79.774 135.091 C 81.169 135.962, 82.345 135.729, 85.274 134.001 C 90.471 130.935, 90.147 128.615, 84.095 125.548 L 79.190 123.063 76.534 125.152 M 50.223 126.557 C 47.671 128.344, 47.230 130.233, 49.574 129.333 C 51.398 128.633, 59 130.913, 59 132.160 C 59 132.622, 57.711 133, 56.136 133 C 52.397 133, 48 137.344, 48 141.038 L 48 143.802 51.106 140.901 C 52.814 139.306, 54.726 137.994, 55.356 137.986 C 55.985 137.979, 57.625 137.686, 59 137.335 C 61.397 136.723, 61.367 136.826, 58.250 139.857 C 55.002 143.015, 54.381 145.621, 55.949 149.500 C 56.659 151.254, 56.959 151.007, 58.394 147.484 C 59.544 144.661, 61.364 142.662, 64.515 140.758 C 66.982 139.268, 69 137.371, 69 136.542 C 69 134.788, 60.868 126, 59.245 126 C 58.641 126, 57.941 126.787, 57.689 127.750 C 57.345 129.067, 57.203 128.943, 57.116 127.250 C 56.976 124.529, 53.602 124.189, 50.223 126.557 M 172.702 131.846 C 170.063 132.776, 167.588 134.040, 167.202 134.653 C 166.816 135.267, 165.643 135.933, 164.595 136.134 C 163.059 136.429, 162.691 137.369, 162.692 141 L 162.692 145.500 172.096 145.621 C 177.268 145.688, 182.400 145.913, 183.500 146.121 C 185.319 146.466, 185.468 146.048, 185.150 141.500 C 184.958 138.750, 184.193 135.037, 183.451 133.250 C 181.886 129.479, 180.085 129.244, 172.702 131.846 M 84.750 143.572 C 81.411 145.383, 81.280 146.998, 84.250 149.693 C 86.298 151.552, 86.792 151.612, 89.750 150.365 C 91.537 149.611, 93.006 148.433, 93.014 147.747 C 93.021 147.061, 93.299 145.488, 93.630 144.250 C 94.169 142.238, 93.877 142.004, 90.867 142.040 C 89.015 142.062, 86.263 142.751, 84.750 143.572 M 95 145.293 C 95 148.288, 95.361 148.683, 98.976 149.648 C 102.326 150.542, 103.193 150.444, 104.476 149.026 C 106.697 146.572, 106.445 146.104, 101.750 143.973 C 95.844 141.292, 95 141.457, 95 145.293 M 168.517 146.972 C 168.104 147.641, 166.728 147.990, 165.460 147.748 C 163.507 147.374, 162.897 147.982, 161.471 151.714 C 160.546 154.138, 159.948 156.253, 160.144 156.413 C 160.340 156.574, 161.400 157.241, 162.500 157.896 C 164.293 158.964, 164.189 159.037, 161.500 158.601 C 159.002 158.197, 158.021 158.694, 155.639 161.572 C 153.297 164.402, 153.002 165.297, 154.012 166.514 C 154.690 167.331, 156.037 168, 157.006 168 C 159.071 168, 166 175.321, 166 177.503 C 166 178.326, 166.471 179, 167.048 179 C 168.486 179, 172.874 174.143, 174.728 170.500 C 175.567 168.850, 177.075 166.715, 178.078 165.757 C 180.024 163.897, 181.672 159.070, 182.637 152.401 C 183.321 147.675, 182.896 147.358, 174.549 146.377 C 170.896 145.947, 169.037 146.131, 168.517 146.972 M 76.137 150.497 C 71.398 155.894, 72.230 158, 79.103 158 C 83.212 158, 85.084 154.023, 82.770 150.209 C 80.481 146.437, 79.671 146.472, 76.137 150.497 M 119.607 148.582 C 118.672 151.019, 118.887 154.812, 120 155.500 C 120.550 155.840, 121 155.564, 121 154.888 C 121 154.211, 121.737 152.843, 122.638 151.847 C 123.973 150.372, 124.043 149.757, 123.016 148.519 C 121.403 146.575, 120.370 146.594, 119.607 148.582 M 104.930 149.584 C 103.901 150.825, 103.875 151.528, 104.812 152.834 C 105.470 153.750, 107.244 156.631, 108.754 159.236 C 110.264 161.840, 111.838 163.978, 112.250 163.986 C 114.427 164.027, 112.084 153.081, 109.203 149.750 C 107.337 147.592, 106.607 147.563, 104.930 149.584 M 165 157.879 C 165 158.362, 166.410 159.341, 168.133 160.055 C 169.856 160.769, 172.627 162.498, 174.290 163.897 C 176.068 165.393, 177.118 165.836, 176.839 164.971 C 176.377 163.541, 167.287 157, 165.761 157 C 165.343 157, 165 157.395, 165 157.879 M 72.486 158.848 C 71.600 159.733, 72.013 169.473, 73.001 171 C 73.844 172.304, 74.463 172.219, 77.736 170.353 C 81.183 168.388, 81.500 167.840, 81.500 163.853 L 81.500 159.500 77.236 158.931 C 74.890 158.618, 72.753 158.580, 72.486 158.848 M 148.193 168.975 C 145.887 170.646, 144 172.360, 144 172.784 C 144 173.208, 145.309 174.703, 146.909 176.107 C 148.547 177.544, 150.368 180.591, 151.077 183.080 C 151.770 185.511, 152.671 187.887, 153.079 188.360 C 154.016 189.447, 162.605 183.606, 164.056 180.895 C 164.898 179.321, 164.760 178.264, 163.439 176.183 C 160.596 171.706, 157.747 169, 155.875 169 C 154.899 169, 153.714 168.311, 153.243 167.469 C 152.515 166.169, 151.752 166.397, 148.193 168.975 M 79.461 170.655 C 77.282 172.099, 75.120 173.619, 74.656 174.034 C 73.649 174.933, 80.688 183, 82.480 183 C 83.792 183, 89 176.117, 89 174.383 C 89 173.828, 87.745 172.172, 86.211 170.702 L 83.421 168.029 79.461 170.655 M 89.431 176.250 C 89.043 177.488, 87.663 179.772, 86.363 181.327 C 85.063 182.881, 84 184.550, 84 185.035 C 84 185.881, 91.996 191, 93.318 191 C 94.180 191, 97.555 184.172, 98.370 180.777 C 98.953 178.352, 98.589 177.831, 95.052 176.027 C 90.147 173.524, 90.286 173.518, 89.431 176.250 M 136.250 175.491 C 132.575 177.088, 132.381 177.672, 134.514 180.717 C 135.347 181.906, 136.476 185.235, 137.022 188.113 C 137.567 190.992, 138.233 193.566, 138.501 193.834 C 139.326 194.659, 146.677 192.082, 149.105 190.116 C 151.312 188.329, 151.347 188.081, 149.978 183.932 C 148.355 179.014, 143.931 173.981, 141.284 174.039 C 140.303 174.061, 138.037 174.714, 136.250 175.491 M 99.926 178.639 C 99.682 181.463, 98.811 184.465, 97.498 187.004 C 95.418 191.026, 95.597 191.896, 98.750 193.098 C 105.099 195.517, 106.892 195.415, 107.973 192.572 C 109.300 189.081, 109.578 181.171, 108.414 180.041 C 107.112 178.779, 100.015 177.607, 99.926 178.639 M 124.155 178.718 C 122.253 179.080, 121.946 179.574, 122.531 181.332 C 122.928 182.524, 123.402 186.200, 123.585 189.500 C 123.768 192.800, 123.936 195.770, 123.959 196.101 C 124.009 196.831, 133.543 195.400, 135.121 194.425 C 136.694 193.453, 135.529 184.704, 133.329 180.980 C 131.553 177.974, 130.036 177.600, 124.155 178.718 M 111.500 179.765 C 110.950 180.169, 110.485 182.075, 110.466 184 C 110.448 185.925, 110.082 189.347, 109.653 191.605 L 108.873 195.711 113.250 196.311 C 115.657 196.641, 118.656 196.641, 119.915 196.312 C 122.086 195.744, 122.185 195.331, 121.830 188.307 C 121.571 183.180, 121.001 180.612, 119.978 179.965 C 118.218 178.852, 112.913 178.727, 111.500 179.765";

// Subpaths categorized by anatomy
const subpaths = HERALDIC_DRAGON_PATH.split(/(?=M\s)/).filter((s) => s.trim().length > 0);

// Head: 0 (crown horns, snout, open maw), 3 (neck dorsal spines), 4 (eye slit), 7 (jaw tooth)
const HEAD_SVG = [0, 3, 4, 7].map((i) => subpaths[i]).join(" ");

// Torso, Wings & Limbs: 1 (bat wing), 2, 5, 6 (wing ribs), 8 (chest), 9 (foreclaws), 10, 11, 12, 13, 14, 15 (belly & perched leg)
const BODY_SVG = [1, 2, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => subpaths[i]).join(" ");

// Tail plates sequenced from hip to coiled tip:
const TAIL_INDICES = [16, 19, 22, 26, 28, 31, 33, 34, 32, 30, 29, 27, 23, 20, 21, 25, 24];

interface Point {
  x: number;
  y: number;
}

interface UV {
  u: number;
  v: number;
}

interface ParsedCmd {
  type: string;
  uvs: UV[];
}

// Rest spine centerline for the tail:
// In original SVG space (0..225), center is (112, 112)
const REST_SPINE_POINTS: Point[] = [
  { x: 152, y: 118 }, // Hip connection
  { x: 168, y: 125 }, // Upper tail root
  { x: 175, y: 138 }, // Descending flank
  { x: 172, y: 156 }, // Lower flank
  { x: 162, y: 170 }, // Lower curve entry
  { x: 148, y: 180 }, // Bottom curve entry
  { x: 134, y: 186 }, // Bottom curve
  { x: 120, y: 188 }, // Bottom center
  { x: 106, y: 187 }, // Bottom left
  { x: 92, y: 183 }, // Curving upward
  { x: 82, y: 174 }, // Curving inner
  { x: 76, y: 162 }, // Outer loop peak
  { x: 77, y: 150 }, // Inner loop heading right
  { x: 86, y: 145 }, // Inner loop top
  { x: 98, y: 146 }, // Inner loop middle
  { x: 109, y: 153 }, // Heading to tip
  { x: 122, y: 151 }, // Tip
];

const REST_CUM_DIST: number[] = [0];
for (let i = 1; i < REST_SPINE_POINTS.length; i++) {
  const d = Math.hypot(
    REST_SPINE_POINTS[i].x - REST_SPINE_POINTS[i - 1].x,
    REST_SPINE_POINTS[i].y - REST_SPINE_POINTS[i - 1].y
  );
  REST_CUM_DIST.push(REST_CUM_DIST[i - 1] + d);
}
const TOTAL_REST_LENGTH = REST_CUM_DIST[REST_CUM_DIST.length - 1];

function parseSvgPath(dStr: string) {
  const commands: { type: string; pts: Point[] }[] = [];
  const regex = /([MCZL])\s*([^MCZL]*)/gi;
  let match;
  while ((match = regex.exec(dStr)) !== null) {
    const type = match[1].toUpperCase();
    const args = match[2]
      .trim()
      .split(/[\s,]+/)
      .filter(Boolean)
      .map(Number);
    const pts: Point[] = [];
    for (let i = 0; i < args.length; i += 2) {
      if (!isNaN(args[i]) && !isNaN(args[i + 1])) {
        pts.push({ x: args[i], y: args[i + 1] });
      }
    }
    commands.push({ type, pts });
  }
  return commands;
}

function projectOntoSpine(pt: Point): UV {
  let bestDistSq = Infinity;
  let bestU = 0;
  let bestV = 0;

  for (let i = 0; i < REST_SPINE_POINTS.length - 1; i++) {
    const p0 = REST_SPINE_POINTS[i];
    const p1 = REST_SPINE_POINTS[i + 1];
    const segDx = p1.x - p0.x;
    const segDy = p1.y - p0.y;
    const segLenSq = segDx * segDx + segDy * segDy;
    if (segLenSq === 0) continue;

    const t = Math.max(0, Math.min(1, ((pt.x - p0.x) * segDx + (pt.y - p0.y) * segDy) / segLenSq));
    const projX = p0.x + t * segDx;
    const projY = p0.y + t * segDy;
    const distSq = (pt.x - projX) * (pt.x - projX) + (pt.y - projY) * (pt.y - projY);

    if (distSq < bestDistSq) {
      bestDistSq = distSq;
      const segLen = Math.sqrt(segLenSq);
      const spineDist = REST_CUM_DIST[i] + t * segLen;
      bestU = spineDist / TOTAL_REST_LENGTH;

      const normX = -segDy / segLen;
      const normY = segDx / segLen;
      bestV = (pt.x - projX) * normX + (pt.y - projY) * normY;
    }
  }

  return { u: bestU, v: bestV };
}

// Pre-compute UV mappings once at module load
const TAIL_COMMANDS_UV: ParsedCmd[][] = TAIL_INDICES.map((idx) => {
  const parsed = parseSvgPath(subpaths[idx]);
  return parsed.map((cmd) => ({
    type: cmd.type,
    uvs: cmd.pts.map((pt) => projectOntoSpine(pt)),
  }));
});

export default function SplineDragon({ containerRef }: SplineDragonProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cache the Path2D objects
    const headPath = new Path2D(HEAD_SVG);
    const bodyPath = new Path2D(BODY_SVG);

    let width = 0;
    let height = 0;

    const updateSize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Kinematics and spine chain
    let dragonX = width * 0.45;
    let dragonY = height * 0.35;
    let velX = 0;
    let velY = 0;
    let mouseX = width * 0.5;
    let mouseY = height * 0.35;
    let hasMouse = false;
    let opacity = 0;
    let flightTime = 0;

    let targetScaleX = 1;
    let currentScaleX = 1;

    // Inverse kinematics tail spine: 20 nodes
    const NUM_NODES = 20;
    const nodes: { x: number; y: number; angle: number }[] = [];
    for (let i = 0; i < NUM_NODES; i++) {
      nodes.push({ x: dragonX + i * 8, y: dragonY, angle: 0 });
    }

    let currentExtension = 0;

    const handleMouseEnter = () => {
      setIsHovered(true);
      hasMouse = true;
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      hasMouse = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      if (newX > mouseX + 3) targetScaleX = -1; // face right
      else if (newX < mouseX - 3) targetScaleX = 1; // face left

      mouseX = newX;
      mouseY = newY;
      hasMouse = true;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    // ═════════════════════════════════════════════════════════════════════════
    // ANIMATION & RENDER LOOP
    // ═════════════════════════════════════════════════════════════════════════
    const render = () => {
      if (hasMouse) {
        opacity = Math.min(1, opacity + 0.08);
      } else {
        opacity = Math.max(0, opacity - 0.04);
      }

      if (opacity > 0.005) {
        ctx.clearRect(0, 0, width, height);
        flightTime += 0.035;

        // Target coordinates with subtle organic breathing float
        let targetX = mouseX;
        let targetY = mouseY;
        if (hasMouse) {
          const hoverFloatX = Math.sin(flightTime * 2.2) * 6;
          const hoverFloatY = Math.cos(flightTime * 2.8) * 4;
          targetX += hoverFloatX;
          targetY += hoverFloatY;
        } else {
          targetX = width * 0.5 + Math.sin(flightTime * 1.2) * (width * 0.32);
          targetY = height * 0.45 + Math.sin(flightTime * 2.0) * (height * 0.2);
        }

        const toMouseX = targetX - dragonX;
        const toMouseY = targetY - dragonY;

        velX = velX * 0.84 + toMouseX * 0.028;
        velY = velY * 0.84 + toMouseY * 0.028;
        dragonX += velX;
        dragonY += velY;

        const speed = Math.hypot(velX, velY);

        // Extension factor: 0 = coiled rest pose, 1 = fully extended trailing spine
        const targetExtension = Math.min(speed / 3.8, 1.0);
        currentExtension += (targetExtension - currentExtension) * 0.12;

        // Facing flip interpolation
        currentScaleX += (targetScaleX - currentScaleX) * 0.14;

        // Scale dynamically relative to container height
        const creatureScale = Math.max(0.48, Math.min(0.68, height * 0.0028));

        // Hip position in world coordinates (origin 112, 112)
        const localHipX = (152 - 112) * creatureScale * currentScaleX;
        const localHipY = (118 - 112) * creatureScale;
        const hipWorldX = dragonX + localHipX;
        const hipWorldY = dragonY + localHipY;

        // Node 0 sits at the hip joint
        nodes[0].x = hipWorldX;
        nodes[0].y = hipWorldY;
        nodes[0].angle = Math.atan2(velY, velX * currentScaleX);

        // Segment spacing extends proportionally with movement speed
        const extendedSegDist = 7.0 + Math.min(speed * 0.9, 11.0);

        for (let i = 1; i < NUM_NODES; i++) {
          const prev = nodes[i - 1];
          const curr = nodes[i];

          // Dynamic trailing position
          const dx = curr.x - prev.x;
          const dy = curr.y - prev.y;
          const d = Math.hypot(dx, dy) || 1;
          const ikX = prev.x + (dx / d) * extendedSegDist;
          const ikY = prev.y + (dy / d) * extendedSegDist;

          // Resting coiled position (from REST_SPINE_POINTS)
          const restU = i / (NUM_NODES - 1);
          const restIdx = Math.min(
            Math.floor(restU * (REST_SPINE_POINTS.length - 1)),
            REST_SPINE_POINTS.length - 2
          );
          const restFrac = restU * (REST_SPINE_POINTS.length - 1) - restIdx;
          const rp0 = REST_SPINE_POINTS[restIdx];
          const rp1 = REST_SPINE_POINTS[restIdx + 1];

          const restRelX =
            (rp0.x + restFrac * (rp1.x - rp0.x) - 152) * creatureScale * currentScaleX;
          const restRelY = (rp0.y + restFrac * (rp1.y - rp0.y) - 118) * creatureScale;
          const coiledX = hipWorldX + restRelX;
          const coiledY = hipWorldY + restRelY;

          // Seamless blend between coiled resting posture and extending trailing spline
          curr.x = coiledX + (ikX - coiledX) * currentExtension;
          curr.y = coiledY + (ikY - coiledY) * currentExtension;
          curr.angle = Math.atan2(curr.y - prev.y, curr.x - prev.x);
        }

        // ═════════════════════════════════════════════════════════════════════
        // DYNAMIC CONTRAST COLOR INVERSION BASED ON VERTICAL POSITION:
        // Top half: "golden" (gold text)  -> Dragon is WHITE (#FFFFFF) with Gold accents
        // Bottom half: "dragons" (white text) -> Dragon is GOLD (#FFBA24) with White accents
        // ═════════════════════════════════════════════════════════════════════
        const normalizedY = Math.max(0, Math.min(1, dragonY / height));
        let t = 0;
        if (normalizedY < 0.44) {
          t = 0; // 100% White dragon over golden text
        } else if (normalizedY > 0.56) {
          t = 1; // 100% Gold dragon over white text
        } else {
          t = (normalizedY - 0.44) / 0.12;
          t = 0.5 - 0.5 * Math.cos(t * Math.PI);
        }

        const r = Math.round(255 + (255 - 255) * t);
        const g = Math.round(255 + (186 - 255) * t);
        const b = Math.round(255 + (36 - 255) * t);
        const primaryColor = `rgb(${r}, ${g}, ${b})`;

        const ar = Math.round(255 + (255 - 255) * (1 - t));
        const ag = Math.round(186 + (255 - 186) * (1 - t));
        const ab = Math.round(36 + (255 - 36) * (1 - t));
        const accentColor = `rgb(${ar}, ${ag}, ${ab})`;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = primaryColor;
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 0.6;
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = 9;

        // Spline evaluator for tail deformation
        const evalDynSpine = (u: number) => {
          const param = Math.max(0, Math.min(1, u)) * (NUM_NODES - 1);
          const idx = Math.min(Math.floor(param), NUM_NODES - 2);
          const frac = param - idx;

          const p0 = nodes[idx];
          const p1 = nodes[idx + 1];

          const x = p0.x + frac * (p1.x - p0.x);
          const y = p0.y + frac * (p1.y - p0.y);
          const tangX = p1.x - p0.x;
          const tangY = p1.y - p0.y;
          const tangLen = Math.hypot(tangX, tangY) || 1;

          // Normal vector perpendicular to spline
          const nx = (-tangY / tangLen) * currentScaleX;
          const ny = tangX / tangLen;

          return { x, y, nx, ny };
        };

        // ── 1. RENDER EXTENDING HERALDIC TAIL ──
        ctx.beginPath();
        TAIL_COMMANDS_UV.forEach((cmds) => {
          cmds.forEach((cmd) => {
            if (cmd.type === "M") {
              const sp = evalDynSpine(cmd.uvs[0].u);
              const px = sp.x + cmd.uvs[0].v * sp.nx * creatureScale;
              const py = sp.y + cmd.uvs[0].v * sp.ny * creatureScale;
              ctx.moveTo(px, py);
            } else if (cmd.type === "C") {
              const sp1 = evalDynSpine(cmd.uvs[0].u);
              const p1x = sp1.x + cmd.uvs[0].v * sp1.nx * creatureScale;
              const p1y = sp1.y + cmd.uvs[0].v * sp1.ny * creatureScale;

              const sp2 = evalDynSpine(cmd.uvs[1].u);
              const p2x = sp2.x + cmd.uvs[1].v * sp2.nx * creatureScale;
              const p2y = sp2.y + cmd.uvs[1].v * sp2.ny * creatureScale;

              const sp3 = evalDynSpine(cmd.uvs[2].u);
              const p3x = sp3.x + cmd.uvs[2].v * sp3.nx * creatureScale;
              const p3y = sp3.y + cmd.uvs[2].v * sp3.ny * creatureScale;

              ctx.bezierCurveTo(p1x, p1y, p2x, p2y, p3x, p3y);
            } else if (cmd.type === "L") {
              const sp = evalDynSpine(cmd.uvs[0].u);
              const px = sp.x + cmd.uvs[0].v * sp.nx * creatureScale;
              const py = sp.y + cmd.uvs[0].v * sp.ny * creatureScale;
              ctx.lineTo(px, py);
            } else if (cmd.type === "Z") {
              ctx.closePath();
            }
          });
        });
        ctx.fill("evenodd");
        ctx.stroke();

        // ── 2. RENDER TORSO, HIND LEG & FLAPPING WINGS ──
        ctx.save();
        ctx.translate(dragonX, dragonY);
        ctx.scale(currentScaleX * creatureScale, creatureScale);
        ctx.translate(-112, -112);

        // Harmonic bat wing flap
        const wingFlap = Math.sin(flightTime * 4.8) * 0.04;
        ctx.transform(1, 0, wingFlap, 1, 0, 0);

        ctx.fill(bodyPath, "evenodd");
        ctx.stroke(bodyPath);
        ctx.restore();

        // ── 3. RENDER LEADING HEAD (points and steers towards cursor) ──
        const localNeckX = (85 - 112) * creatureScale * currentScaleX;
        const localNeckY = (75 - 112) * creatureScale;
        const neckWorldX = dragonX + localNeckX;
        const neckWorldY = dragonY + localNeckY;

        // Natural neck pitch clamped within biological rotation range
        const headPitch = Math.max(-0.45, Math.min(0.45, toMouseY * 0.005));

        ctx.save();
        ctx.translate(neckWorldX, neckWorldY);
        ctx.scale(currentScaleX * creatureScale, creatureScale);
        ctx.rotate(headPitch);
        ctx.translate(-85, -75);

        ctx.fill(headPath, "evenodd");
        ctx.stroke(headPath);
        ctx.restore();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
