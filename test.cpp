double findSolution(int* cubes, int* fixedCubes, int* comb, int turn, bool isMax, bool newTurn, int reRollNum, int* bestFixation, bool& tryToReroll) {
    if (newTurn) {
        int k = getCombinationIndex(cubes, comb);
        if (k != -1) {
            markCombinations(comb, k);
            comb[k] = 1;
            int* tCubes = new int[6];
            for (int i = 0; i < 6; i++)
                tCubes[i] = cubes[i] - combinations[k][i];
            k = getCombinationIndex(cubes, comb);
            if (k != -1) {
                markCombinations(comb, k);
                comb[k] = 1;
            }
            delete[] tCubes;
        }
    }
    if (turn == 1) { 
        return sumCombinations(comb);
    }
    if (!isMax) {
        double max = 0;
        int kk = 0;
        int* tCubes = new int[6];
        cpyArray(tCubes, cubes, 6);
        int divider = 0;
        for (int i = 0; i < m; i++) {
            cpyArray(cubes, solutionFV[i], 6);
            int t1 = applyMask(cubes, fixedCubes);
            if (solutionFV[i][6] >= 1 && t1 == 10) {
                divider += solutionFV[i][6];
            }
        }
        for (int i = 0; i < m && divider != 0; i++) {
            cpyArray(cubes, solutionFV[i], 6);
            int t1 = applyMask(cubes, fixedCubes);
            if (solutionFV[i][6] >= 1 && t1 == 10) {
                double t = findSolution(cubes, fixedCubes, comb, turn, true, false, reRollNum, bestFixation, tryToReroll);
                //if (solutionFV[i][6] / (double)divider * t > max)
                    max += solutionFV[i][6] / (double)divider * t;
            }
        }
        cpyArray(cubes, tCubes, 6);
        delete[] tCubes;
        return max;
    }
    if (isMax) {
        if (reRollNum < 2) {
            int* tComb = new int[combinationsAmount];
            int* tCubes = new int[6];
            int* t1Cubes = new int[6];
            cpyArray(tComb, comb, combinationsAmount);
            double c1 = findSolution(cubes, fixedCubes, comb, turn + 1, false, true, 0, bestFixation, tryToReroll);
            cpyArray(comb, tComb, combinationsAmount);
            cpyArray(t1Cubes, fixedCubes, 6);
            fixCubes(cubes, fixedCubes, comb);
            cpyArray(tComb, comb, combinationsAmount);
            double c2 = findSolution(cubes, fixedCubes, comb, turn, false, false, reRollNum + 1, bestFixation, tryToReroll);
            if (turn == 0) {
                if (c1 > c2)
                    tryToReroll = false;
                else {
                    tryToReroll = true;
                    cpyArray(bestFixation, fixedCubes, 6);
                }
            }
            cpyArray(comb, tComb, combinationsAmount);
            cpyArray(fixedCubes, t1Cubes, 6);
            delete[] tComb;
            delete[] tCubes;
            delete[] t1Cubes;
            return max(c1, c2);
        }
        return findSolution(cubes, fixedCubes, comb, turn + 1, false, true, 0, bestFixation, tryToReroll);
    }
}