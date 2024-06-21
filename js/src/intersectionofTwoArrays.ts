function intersection(nums1: number[], nums2: number[]): number[] {
    const set = new Set(nums1);
    const result =[]

   for(let i=0; i< nums2.length; i++){
      const el = nums2[i]
      if(set.has(el)){
        result.push(el);
        set.delete(el)
      }
   }
   
return result
};