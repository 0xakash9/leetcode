package main

func mergeAlternately(word1 string, word2 string) string {

	var str string

	for i := 0; i < len(word1) || i < len(word2); i++ {
		if i < len(word1) {

			str = str + string(word1[i])
		}
		if i < len(word2) {

			str = str + string(word2[i])
		}
	}

	return str
}