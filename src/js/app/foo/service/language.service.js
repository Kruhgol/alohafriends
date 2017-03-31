module.exports = {
        isRuLanguage: true,
        isEngLanguage: false,
        howLanguage: function(){
            if(this.isRuLanguage === true && this.isEngLanguage === false){
                return 'ru'
            }
            else if (this.isRuLanguage === false && this.isEngLanguage === true){
                return 'eng'
            }
        },
        language: function(){
            if(this.isRuLanguage === true && this.isEngLanguage === false){
                this.dictionary = this.ru;
            }
            else if (this.isRuLanguage === false && this.isEngLanguage === true){
                this.dictionary = this.eng;
            }
        },
        dictionary: '',

        ru : {
            journal: 'Дневник',
            map: 'Карта',
            projects: 'Проекты',
            partners: 'Партнеры',
            communication: 'Связь',
            seeToo: 'Смотрите также',
            marks: 'Метки',
            footerCopy: 'При копировании материалов с данного сайта ссылка на источник обязательна',
            footerHost: 'Сайт размещен на хостинге',
            ourTravel: 'Наше путишествие',
            sorry: 'Извините, страничка в разработке!',
            leaveComment : 'Оставить комментарий',
            comments: 'Комментарии',
            sendComment: 'Отправить комментарий',
            putComment: 'Введите комментарий'


        },
        eng: {
            journal: 'Journal',
            map: 'Map',
            projects: 'Projects',
            partners: 'Partners',
            communication: 'Contacts',
            seeToo: 'See too',
            marks: 'Marks',
            footerCopy: '',
            footerHost: '',
            ourTravel: 'Our travel',
            sorry: 'Sorry, the page is designing!',
            leaveComment: 'leave a comment',
            comments: 'Comments',
            sendComment: 'Send comment',
            putComment: 'Put in comment'

        }
    }