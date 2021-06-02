exports.allAccess = (req, res) => {
    res.status(200).send("Contenu Public.");
  };
  
  exports.utilisateurBoard = (req, res) => {
    res.status(200).send("Contenu Utilisateur.");
  };
  
  exports.administrateurBoard = (req, res) => {
    res.status(200).send("Contenu Administrateur.");
  };
  
  exports.redacteurBoard = (req, res) => {
    res.status(200).send("Contenu Rédacteur.");
  };