const moduleIdRegex = /moduleId: module.id,/g;
const moduleNameRegex = /moduleId: __moduleName,/g;

const templateUrlReg = /templateUrl:/g;
const templateReg = /template:.*'/g;

const styleUrlReg = /styleUrls: \[/g;

const styleReg = /styles:.*',/g;

const closestyleReg = /css'\]/g;

const moduleIdPath = /module.id.replace/g;

module.exports = function(source) {
  this.cacheable();

  if (moduleIdRegex.test(source)) {
    source = source.replace(moduleIdRegex, (match) => {
        return `// ${match}`;
  });
  }

  if (moduleNameRegex.test(source)) {
    source = source.replace(moduleNameRegex, (match) => {
        return `// ${match}`;
  });
  }

  if (templateUrlReg.test(source)) {
    source = source.replace(templateUrlReg, (match) => {
      if(match.indexOf("''") != -1){
        return `${match}`;
      }else{
        return `template: require(`;
      }
    });
  }

  if (templateReg.test(source)) {
    source = source.replace(templateReg, (match) => {
        if(match.indexOf("''") != -1){
          return `${match}`;
        }else{
          return `${match})`;
        }
  });
  }

  if (styleUrlReg.test(source)) {
    source = source.replace(styleUrlReg, (match) => {
        return `styles: [require(`;
  });
  }

  if (styleReg.test(source)) {
    source = source.replace(styleReg, (match) => {
        var newMatch = match.replace("',","'");
        return `${newMatch}), require(`;
  });
  }

  if (closestyleReg.test(source)) {
    source = source.replace(closestyleReg, (match) => {
        return `css')]`;
  });
  }

  if (moduleIdPath.test(source)) {
    source = source.replace(moduleIdPath, (match) => {
        return `''.replace`;
  });
  }

  return source;
}
