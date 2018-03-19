var bio = {
  "name": "Letícia Ribeiro Miranda",
  "role": "Graduanda em Engenharia da Computação e Desenvolvedora Front End",
  "contacts": {
    "mobile": "+5561985903239",
    "email": "letiiribeiro@gmail.com",
    "website": "leticiaribeirom.github.io/",
    "github": "leticiaribeirom",
    "twitter": "@letiiribeiro",
    "location": "Brasília, Brazil"
  },
  "welcomeMessage": "Olá! Meu nome é Letícia, tenho 22 anos e curso Engenharia da Computação na UnB. Gosto de desafios e me considero uma pessoa esforçada e um pouco perfeccionista.",
  "skills": [
    "C", "Java", "Ruby on Rails", "HTML",
    "CSS", "JavaScript",
    "LaTeX", "TypeScript", "Swift"
  ],
  "biopic": "images/me.jpg"
};

var work = {
  "jobs": [{
      "employer": "Universidade de Brasília",
      "title": "Estágio de Programação",
      "location": "Brasília, Brasil",
      "dates": "Agosto de 2015 - Dezembro de 2015",
      "description": "Desenvolvimento e manutenção de um sistema da UnB."
  },
    {
        "employer": "Senses - capítulo de Engenharia Biomédica do IEEE na UnB",
        "title": "Trabalho Voluntário como Desenvolvedor Web",
        "location": "Brasília, Brasil",
        "dates": "Novembro de 2016 - Janeiro de 2018",
        "description": "Desenvolvimento em equipe de um site utilizando Ruby on Rails. Atuando tanto no backend quanto no frontend."
    },
    {
      "employer": "Senado Federal",
      "title": "Estágio de Desenvolvimento Web",
      "location": "Brasilia, Brazil",
      "dates": "Dezembro de 2015 - Dezembro de 2017",
      "description": "Desenvolvimento e manutenção de um projeto com código base grande em Java trabalhando em equipe utilizando metologia ágil baseada no Scrum. Além disso, participei na criação de um sistema em Java de alta relevância que me permitiu trabalhar também com Angular 4."
  }]
};

var education = {
  "schools": [{
    "name": "Universidade de Brasília",
    "location": "Brasília, Brasil",
    "degree": "Bacharel em Engenharia da Computação",
    "majors": [
      "Engenharia da Computação"
    ],
    "minors": [
      "Engenharia Elétrica",
      "Ciência da Computação"
    ],
    "dates": "2012-2018",
    "url": "www.unb.br/"
  }],
  "onlineCourses": [{
      "title": "NanoDegree Front End Web Developer",
      "dates": "2016-2017",
      "school": "Udacity",
      "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
  },
    {
      "title": "Web Accessibility",
      "dates": "2017",
      "school": "Udacity",
      "url": "https://br.udacity.com/course/web-accessibility--ud891/"
  }]
};

var projects = {
  "projects": [{
    "title": "Liber",
    "dates": "2017",
    "description": "Site desenvolvido enquanto freelancer apresentando mais de 10 telas diferentes, alguns modais e animações. Versão live disponível em https://leticiaribeirom.github.io/liber-index.html",
    "images": [
      "images/logo.png"
    ]
  },
  {
    "title": "Possibilita",
    "dates": "2017",
    "description": "Site com objetivo de construir soluções para pessoas com necessidades especiais auxiliando nas suas necessidades diárias. Desenvolvimento tanto do front end como do back end do website.",
    "images": [
      "images/logo-possibilita.png"
    ]
  }]
};

bio.display = function() {
  var nomeFormatado = HTMLheaderName.replace("%data%", bio.name);
  var roleFormatado = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(roleFormatado);
  $("#header").prepend(nomeFormatado);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts
    .location);
  $("#topContacts, #footerContacts").append(formattedWebsite);
  $("#topContacts, #footerContacts").append(formattedMobile);
  $("#topContacts, #footerContacts").append(formattedEmail);
  $("#topContacts, #footerContacts").append(formattedGithub);
  $("#topContacts, #footerContacts").append(formattedLocation);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",
    bio.welcomeMessage);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMessage);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[
        i]);
      $("#skills").append(formattedSkill);
    }
  }
};

education.display = function() {
  if (education.schools.length > 0) {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%",
        school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%",
        school.degree);
      var formattedNameDegree = formattedName + formattedDegree;
      var formattedLocation = HTMLschoolLocation.replace(
        "%data%", school.location);
      var formattedDates = HTMLschoolDates.replace("%data%",
        school.dates);
      $(".education-entry:last").append(formattedNameDegree);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedDates);
      if (school.majors.length > 0) {
        school.majors.forEach(function(major) {
          var formattedMajor = HTMLschoolMajor.replace(
            "%data%", major);
          $(".education-entry:last").append(formattedMajor);
        });
      }
      if (school.minors.length > 0) {
        school.minors.forEach(function(minor) {
          var formattedMinor = HTMLschoolMinor.replace(
            "%data%", minor);
          $(".education-entry:last").append(formattedMinor);
        });
      }
    });
  }
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCouse) {
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%",
        onlineCouse.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%",
        onlineCouse.school);
      var formattedTitleSchool = formattedTitle +
        formattedSchool;
      var formattedOnlineDates = HTMLonlineDates.replace(
        "%data%", onlineCouse.dates);
      var formattedURL = HTMLonlineURL.replace("%data%",
        onlineCouse.url);
      $(".education-entry:last").append(formattedTitleSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedURL);
    });
  }
};

work.display = function() {
  if (work.jobs.length > 0) {
    work.jobs.forEach(function(i) {
      $("#workExperience").append(HTMLworkStart);
      var formattedTitle = HTMLworkTitle.replace("%data%", i.title);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",
        i.employer);
      var formattedEmployerTitle = formattedEmployer +
        formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedLocation = HTMLworkLocation.replace("%data%",
        i.location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDate = HTMLworkDates.replace("%data%", i.dates);
      $(".work-entry:last").append(formattedDate);
      var formattedDescription = HTMLworkDescription.replace(
        "%data%", i.description);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};

projects.display = function() {
  if (projects.projects.length > 0) {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%",
        project.title);
      var formattedDates = HTMLprojectDates.replace("%data%",
        project.dates);
      var formattedDescription = HTMLprojectDescription.replace(
        "%data%", project.description);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      if (project.images.length > 0) {
        project.images.forEach(function(image) {
          var formattedImage = HTMLprojectImage.replace(
            "%data%", image);
          $(".project-entry:last").append(formattedImage);
        });
      }
    });
  }
};

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

function locationizer(work_obj) {
  var arrayLocalizacoes = [];
  if (work_obj.jobs.length > 0) {
    work_obj.jobs.forEach(function(i) {
      var localizacao = work_obj.jobs[i].location;
      arrayLocalizacoes.push(localizacao);
    });
  }
  return arrayLocalizacoes;
}

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
// $("#main").append(internationalizeButton);
// $("#mapDiv").append(googleMap);
bio.display();
education.display();
work.display();
projects.display();