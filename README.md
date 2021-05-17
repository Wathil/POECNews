# POEC News
#
# github: https://github.com/Wathil/POECNews
#
# Groupe: POECNews, El Hassane, Slimane et Yannick
#Sujet: Site de diffusion d’informations payantes
#Le site s’articule autour de la gestion de rôles
#Liste des fonctionnalités:
#CLIENTS
#Pour le client non enregistré:
#	C1 Consultation des premières lignes des articles payants et des commentaires associés
#	C2 Filtre des articles par tags
#	C3 Créer un compte avec identification par l’email
#	Le client non enregistré ne peut pas faire de commentaire
#	Le client non enregistré ne peut pas acheter d’article
#	Le client peut rechercher des articles avec une liste de tags
#Pour le client enregistré:
#	C1 Consultation des articles gratuits et des premières lignes des articles payants qu’il n’a pas acheté
#	C2 Filtre des articles par par tags
#	C4 Pouvoir se connecter facilement
#	C5 Retrouver ou changer son mot de passe avec son email
#	C6 Pouvoir acheter un article
#	C7 Pouvoir accéder à sa liste d’articles achetés
#	C8 Faire un commentaire, pouvoir le modifier ou le supprimer
#	C9 Faire une réclamation à la suite d’un contentieux commercial ou la perte des identifiants de connexion (sans connexion donc)
#	C10 Si la réclamation est accepté le client à droit à un article gratuit (1 contentieux = 1 article)
#	Tous les articles sont de même format et au même prix
#	Les clients sont enregistrés avec un pseudo et un email, pas d’autres informations
#	Seuls les clients qui ont acheté l'article peuvent le commenter
#REDACTEURS
#	R1 Pouvoir se connecter en tant que rédacteur
#	R2 Pouvoir écrire un nouvel article sous la forme d'un brouillon, puis pouvoir le modifier
#	R3 Publier l'article si il a au moins 1 tag
#	R4 Désactiver l'article
#	R5 Si il désactive un article acheté par des clients, un message d’alerte apparait avant confirmation, si il confirme un litige est automatiquement créé
#	R6 Ajouter des photos d’illustrations libre de droit
#	R7 Associer une photo d’illustration à un article
#	R8 Un rédacteur peut ajouter un commentaire comme un client qui a acheté l'article
#	Le rédacteur d’un article n’a de droit que sur ses articles et pas ceux des autres rédacteurs.
#	Le rédacteur d’un article est modérateur des commentaires relatifs à ses articles
#	Une seule photo d'illustration par article
#	Au moins un tag par article (pour la recherche par les clients)
#ADMINISTRATEUR
#	A1 Pouvoir se connecter en tant qu’administrateur
#	A2 Enregistrer un nouveau rédacteur ou le modifier ou le désactiver
#	A3 Modifier un article d'un rédacteur
#	A4 Désactiver un article d'un rédacteur
#	A5 Ajouter supprimer des photos (droit à l’image) dans la bibliothèque d'image
#	A6 Consulter la liste des clients enregistrés avec les commentaires associés et les articles achetés
#	A7 Répondre aux réclamations des clients reçues de l’interface par email
#	A8 Rembourser le client en lui offrant l’article de son choix (crédit d’article)
#	A9 Consulter la liste des commentaires non modérés (nouveaux et modifiés)
#	A10 Modérer les commentaires (effacés de la consultation mais garder en mémoire) si il enfreint les règles en justifiant la raison
#	A11 L'administrateur gère les tags
#	Le client est bien informé qu’en cas de litige (erreur d’article acheté, désactivation de l’article) il ne recevra qu’un crédit d’article et non du cash
#	
#Ce que le site ne fait pas:
#	Gestion des abonnements
#	Pré-achat d’articles 
#