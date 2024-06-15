package main

import "strings"

func arrayStringAreEqual(word1 []string, word2 []string) bool{
  val1:= strings.Join(word1,"");
  val2:= strings.Join(word2,"");

  return val1 == val2
}