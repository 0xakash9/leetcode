package main

func reverseString(s []byte){
   var l=0;
   var r=len(s) - 1;

   for l <= r {
	var rcopy = s[r];
	s[r] = s[l];
	s[l] = rcopy;
    l++;
	r--
   }
}