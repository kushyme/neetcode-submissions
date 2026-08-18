type CharacterEntry = {
    key: number;
    value: string;
};

class Solution {
    isAnagram(s: string, t: string): boolean {
        const characterEntry1: CharacterEntry[] = [];
        const characterEntry2: CharacterEntry[] = [];

        for (let i = 0; i < s.length; i++) {
            characterEntry1.push({
                key: i,
                value: s[i]
            });
        }

        for (let i = 0; i < t.length; i++) {
            characterEntry2.push({
                key: i,
                value: t[i]
            });
        }

        return this.mappingEachCharacter(
            characterEntry1,
            characterEntry2
        );
    }

    mappingEachCharacter(
        array1: CharacterEntry[],
        array2: CharacterEntry[]
    ): boolean {
        const characterCounts: Record<string, number> = {};

        if (array1.length !== array2.length) {
            return false;
        }

        for (let i = 0; i < array1.length; i++) {
            const character = array1[i].value;

            if (characterCounts[character] !== undefined) {
                characterCounts[character] += 1;
            } else {
                characterCounts[character] = 1;
            }
        }

        for (let i = 0; i < array2.length; i++) {
            const character = array2[i].value;

            if (characterCounts[character] !== undefined) {
                characterCounts[character] -= 1;
            } else {
                return false;
            }
        }

        for (const count of Object.values(characterCounts)) {
            if (count !== 0) {
                return false;
            }
        }

        return true;
    }
}