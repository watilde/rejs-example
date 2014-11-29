#!/bin/sh
# Build fixture1.js
cat ../src/sampleThree.js > fixture1.js
cat ../src/sampleTwo.js  >> fixture1.js
cat ../src/sampleOne.js  >> fixture1.js

# Build fixture2.js
cat ../src/sampleThree.js > fixture2.js
echo ''                >> fixture2.js
cat ../src/sampleTwo.js  >> fixture2.js
echo  ''               >> fixture2.js
cat ../src/sampleOne.js  >> fixture2.js
