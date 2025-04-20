from .dao.mongo.mongoDAOFactory import MongoDAOFactory
from .dto.cancionDTO import SongsDTO, SongDTO

class Model ():

     def __init__(self):
         #pass
         self.factory = MongoDAOFactory()
         self.daoSong = self.factory.get_canciones()


     def get_canciones(self):
        mySongsDTO = SongsDTO()
        songs = self.daoSong.get_canciones()
        for s in songs:
            song_data = s # (Local)
           # Crear un objeto SongDTO con los datos de la canción
            song_dto = SongDTO()
            song_dto.idCancion = s.get_idCancion()  # (Local)
            song_dto.nombreCancion = s.get_nombreCancion()
            song_dto.idAlbum = s.get_idAlbum()
            song_dto.idArtista = s.get_idArtista()
            song_dto.idGenero = s.get_idGenero()
            song_dto.url = s.get_url()
            
            #song_dto.id = song_data.get_id() # (Local)
            #song_dto.title = song_data.get_title()
            #song_dto.author = song_data.get_author()
            #song_dto.album = song_data.get_album()
            #song_dto.musicgenre = song_data.get_musicgenre()
            #song_dto.duration = song_data.get_duration()
            #song_dto.price = song_data.get_price()
            #song_dto.rating = song_data.get_rating()
            #song_dto.release = song_data.get_release()
            song_dto = song_dto.songdto_to_dict()
            mySongsDTO.insertSong(song_dto)  # Agregar la canción a la lista
        return mySongsDTO.songlist_to_json()
        