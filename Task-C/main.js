function merge(nums1, m, nums2, n) 
{
  for (let i = m + n, i1 = m - 1, i2 = n - 1; i--;) 
  {
    if (i2 < 0 || nums1[i1] > nums2[i2])
    {
      nums1[i] = nums1[i1--];
    }
    else
    {
      nums1[i] = nums2[i2--];
    }
  }
}

let arr1 = [46,55,88,0,0,0,0];
let arr2 = [18,29,80,90];
let k1 = 3, k2 = 4;
merge(arr1, k1, arr2, k2)
console.log(arr1);
