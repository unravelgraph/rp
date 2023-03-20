/* AJOUTER UN CHAMP PROFIL DANS LA MEMBERLIST */

$(function() {
    
    /* aller chercher le a de chaque user dans la memberlist */
    $('#memff .memps a').each(function() {

    var element = $(this);
    var user_link = element.attr('href');
    var user_id = user_link.match(/\d+/g);

    /* sélectionne la div dans la memberlist où on veut déplacer l'info,
    changer le nom de la var pour chaque champ supp */
    var userresum = $(element).closest('#memff').find('.myrtest');
    var rpmois = $(element).closest('#memff').find('.memberrow_rp');

    $.ajax({
        url: user_link,
        type: 'GET',
        success: function(data) {
            /* dans find, mettre le chemin du champ désiré à partir de la vue profil simple,
            changer le nom de la var pour chaque champ supp */
            var user_resume = $(data).find('#field_id20 .field_uneditable:nth-of-type(1)').text();
            $(userresum).html(user_resume);
          
            var user_rp = $(data).find('#field_id14 .field_uneditable:nth-of-type(1)').text();
            $(rpmois).html(user_rp);
        }

    });
});
});


// PLACEMENT : dans les sujets

// [SPANISH] by Flerex
// https://flerex.dev/entradas/clases-unicas-a-los-campos-del-miniperfil

// Options, by Monomer
// Option to move a field in a different element

!function() {
    const settings = {
        semicolon: false,
        cleanUp: true,
      
        moveGif: ['gif'], /* nom du champ profil, séparé par des - si plusieurs mots (pate-chinois)*/
        moveToGif: '.pgif', /* nom de la div où on envoit l'info */

        movePrimo: ['primogems'],
        moveToPrimo: '.primo',
    }
      , slugify = str=>{
        const from = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
          , to = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
          , reg = new RegExp(from.split('').join('|'),'g');
        return str.trim().toLowerCase().replace(/\s+/g, '-').replace(reg, c=>to.charAt(from.indexOf(c))).replace(/&/g, '-and-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
    }
      , hideSemicolon = (label,name)=>{
        if (label.firstElementChild)
            label.lastChild.remove();
        else
            label.textContent = name
    }
      , main = _=>{
        document.querySelectorAll('.pchara').forEach(p=>{ /* à changer pour la div entourant {postrow.displayed.profile_field.LABEL} {postrow.displayed.profile_field.CONTENT} {postrow.displayed.profile_field.SEPARATOR} */
            const labelcontainer = p.querySelector('.profil_label') /* à changer pour la div entourant le {postrow.displayed.profile_field.LABEL} */
              , label = labelcontainer.querySelector('.label')
              , name = label.textContent.replace(/ *: *$/, '')
              , slug = slugify(name);
            p.classList.add('field-' + slug);
        
            if (settings.moveGif.includes(slug)) {
                p.closest('.inte').querySelector(settings.moveToGif).appendChild(p)
            }
            if (settings.movePrimo.includes(slug)) {
                p.closest('.inte').querySelector(settings.moveToPrimo).appendChild(p)
            }
        
            if (settings.cleanUp) {
                labelcontainer.textContent = settings.semicolon ? name + ': ' : name
            } else if (!settings.semicolon) {
                hideSemicolon(label, name)
            }
        }
        )
    }
    ;
    document.addEventListener('DOMContentLoaded', main)
}();
  
/* couleurs de groupes */
$( document ).ready(function() {$('a[href*="/u"] span').each(function(){
  var color = $(this).css("color");
  $(this).closest('.colorgroup, #fondcolor').css("background-color", color);
  $(this).closest('.colorgroup, #ogpro').css("background", color);
  $(this).closest('.colorgroup, #pda').css("color", color);
  $(this).closest('.postprofile').find('.psdp').css("color", color);
  /* couleurs de groupes pour les champs profil */
  $(this).closest('.postprofile').find('.chara .profil_label').each(function() {
    $(this).css('color',color);
  });
  });
});


/* Déplacer les champs profil dans des div différentes dans la vue profil simple */
$('#field_id-6 .afpgrib').appendTo( $('.apfbas')); /* pour mettre à la fin de la div */
$('#field_id-6').prependTo( $('.afpmess')); /* pour mettre au début de la div */