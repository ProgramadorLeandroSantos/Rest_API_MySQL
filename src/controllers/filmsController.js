const FilmModel = require('../../databases/model/FilmModel');

module.exports = {
    async Read(req,res){
       try {
            const films = await FilmModel.findAll({raw:true,order:[['ID','DESC']]});
            return res.json(films);
       } catch (error) {
           return res.send('there are something wrong ');
       };
    },
    async Create(req,res){
        try {
            await FilmModel.create(req.body);
            return res.send('Film saved !');
        } catch (error) {
            return res.send('Error when save the Film')
        };
    },
    async Destroy(req,res){
        try {
           const film = await FilmModel.findByPk(req.params.id);
           if(film == null || undefined){
               return res.send('There is not a film with this Id');
           }
           else{
                await film.destroy();
                return res.send('Film Deleted !');
           }
        }
        catch (error) {
            return res.send('Error when deleting Film');
        };
    },
    async ReadOne(req,res){
       try {
            const film = await FilmModel.findByPk(req.params.id);
            if(film == null || undefined){
                return res.send('There is not a film with this Id')
            }
            else{
                return res.json(film);
            }
       } catch (error) {
           return res.send(error.message);
       };
    },
    async Update(req,res){
       try {
            const film = await FilmModel.findByPk(req.params.id);
            if(film == undefined || null){
                return res.send('There is not a film with this Id');
            }
            else{
                await film.update(req.body);
                return res.send('film Updated !');
            }
       } catch (error) {
           return res.send(error.message);
       }
    }
};