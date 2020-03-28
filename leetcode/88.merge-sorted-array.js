let merge = (nums1, m, nums2, n) => {
  let current = m + n - 1;
  while (current >= 0) {
    if (m < 1) {
      nums1[current--] = nums2[--n];
      continue;
    }
    if (n < 1) {
      nums1[current--] = nums1[--m];
      continue;
    }

    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current--] = nums1[m - 1];
      m--;
    } else {
      nums1[current--] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
