import Vue from 'vue'
import BotUI from 'botui/build/botui'
import '../node_modules/botui/build/botui.min.css'
import '../node_modules/botui/build/botui-theme-default.css'

let tmpChild = []
let formData = {
  coming: '1',
  alone: '1',
  brunch: '1',
  loverFirstname: 'none',
  hasChildren: '1',
  children: 'none',
  song: 'none',
  over: false
}

export function initBotApp () {
  let botui = BotUI('my-botui-app', {vue: Vue})
  botui.message.add({
    delay: 1000,
    content: 'Nous ferez-vous le plaisir de venir?'
  })
    .then(() => {
      return botui.action.button({
        delay: 1000,
        action: [{
          icon: 'check',
          text: 'Oui !',
          value: 'oui'
        },
        {
          icon: 'check',
          text: 'Hélas...Non',
          value: 'non'
        }]
      })
    })
    .then((res) => {
      if (res.value === 'oui') {
        formData.coming = 0
        setFamily()
      } else {
        formData.coming = 1
        return botui.message.add({
          delay: 1000,
          content: 'Nous sommes désolées de l\'apprendre.. Merci d\'être venu sur notre site, nous espérons vous voir très vite'
        })
          .then(() => {
            formData.over = true
          })
      }
    })

  function setFamily () {
    botui.message.add({
      delay: 1000,
      content: 'Super ! Viendrez-vous seul.e ou accompagné.e?'
    })
      .then(() => {
        return botui.action.button({
          delay: 1000,
          action: [{
            icon: 'check',
            text: 'Accompagné.e',
            value: 'notalone'
          },
          {
            icon: 'check',
            text: 'Seul.e',
            value: 'alone'
          }]
        })
      })
      .then((res) => {
        if (res.value === 'alone') {
          formData.alone = 0
          setEvent()
        } else {
          formData.alone = 1
          setFamilyLover()
        }
      })
  }

  function setFamilyLover () {
    botui.message.add({
      delay: 1000,
      content: 'Quel est le prénom de votre moitié?'
    })
      .then(() => {
        return botui.action.text({
          action: {
            placeholder: 'Prénom'
          }
        })
          .then((res) => {
            formData.loverFirstname = res.value
            botui.message.add({
              delay: 1000,
              content: 'Viendrez-vous avec des enfants?'
            })
          })
          .then(() => {
            return botui.action.button({
              delay: 1000,
              action: [{
                icon: 'check',
                text: 'Oui !',
                value: 'oui'
              },
              {
                icon: 'check',
                text: 'Non',
                value: 'non'
              }]
            })
          })
          .then((res) => {
            if (res.value === 'oui') {
              formData.hasChildren = 0
              setFamilyMember()
            } else {
              formData.hasChildren = 1
              setEvent()
            }
          })
      })
  }

  function setFamilyMember () {
    botui.message.add({
      delay: 1000,
      content: 'Quel est le prénom de votre enfant?'
    })
      .then(() => {
        return botui.action.text({
          action: {
            placeholder: 'son prénom'
          }
        })
          .then((res) => {
            tmpChild.push(res.value)
            return botui.action.text({
              action: {
                placeholder: 'son âge'
              }
            })
          })
      })
      .then((res) => {
        tmpChild.push(res.value)
        botui.message.add({
          delay: 1000,
          content: 'Souhaitez-vous ajouter un autre enfant?'
        })
      })
      .then(() => {
        return botui.action.button({
          delay: 1000,
          action: [{
            icon: 'check',
            text: 'Oui',
            value: 'oui'
          },
          {
            icon: 'check',
            text: 'Non',
            value: 'non'
          }]
        })
          .then((res) => {
            if (res.value === 'oui') {
              setFamilyMember()
            } else {
              formData.children = tmpChild
              // formData.children = 'none'
              setEvent()
            }
          })
      })
  }

  function setEvent () {
    botui.message.add({
      delay: 1000,
      content: 'Dimanche il y aura également un brunch, y serez-vous présent.e également?'
    })
      .then(() => {
        return botui.action.button({
          delay: 1000,
          action: [{
            icon: 'check',
            text: 'Oui jusqu\'au bout !',
            value: 'oui'
          },
          {
            icon: 'check',
            text: 'Non je travaille lundi...',
            value: 'non'
          }]
        })
          .then((res) => {
            if (res.value === 'oui') {
              formData.brunch = 0
              botui.message.add({
                delay: 1000,
                content: 'On est très contente !! Merci et à très vite !'
              })
                .then(() => {
                  setSong()
                })
            } else {
              formData.brunch = 1
              return botui.message.add({
                delay: 1000,
                content: 'Merci d\'être déjà là samedi. On se voit très vite!'
              })
                .then(() => {
                  setSong()
                })
            }
          })
      })
  }

  function setSong () {
    botui.message.add({
      delay: 1000,
      content: 'Juste une dernière chose, quelle est votre chanson préfére?'
    })
      .then(() => {
        return botui.action.text({
          action: {
            placeholder: 'ma chanson préférée'
          }
        })
          .then((res) => {
            formData.song = res.value
          })
          .then(() => {
            formData.over = true
          })
      })
  }
  return formData
}
