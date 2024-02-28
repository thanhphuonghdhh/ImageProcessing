All scripts should be read before run:
- start: npm start
- test: npm test
- build: npm build
- Endpoint to test API: http://localhost:5000/api/images?filename=fjord&width=200&height=200
- You can change variable of filename to change different image, change variable of height and width to change size of image after resize
- There is a validation to make sure your param is valid.

** Resubmit note:
- Move supertest, jasmine and jasmine-spec-reporter to devDependencies
- Move validate to a different function, add validate error when height or width <= 0
- Add test specs for image processing
