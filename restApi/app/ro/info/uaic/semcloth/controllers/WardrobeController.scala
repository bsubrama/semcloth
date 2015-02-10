package ro.info.uaic.semcloth.controllers

import play.api.mvc.{Action, Controller}
import ro.info.uaic.semcloth.core.OntologyHelpers
import ro.info.uaic.semcloth.db.SimpleSPARQL
import ro.info.uaic.semcloth.models.Clothing

object WardrobeController extends Controller{


  def clothingItem(id: String) = Action(parse.json) {
    def asStringForSPARQL(key: String, colors: Array[String]) = {
      colors.map{x => s"$key $x"}.mkString("; ")
    }

    def asXSDString(str: String) = {
      "\"" + str + "\"^^xsd:string"
    }

    implicit request => {
      import ro.info.uaic.semcloth.controllers.json.JsonConverters.clothingItemFormat
      request.body.validate[Clothing].fold(
        error => BadRequest("Object is not formatted correctly"),
        valid = correctData => {

          val resource = id + System.currentTimeMillis()

          val queryString =
            s"""INSERT DATA {
               |GRAPH ${OntologyHelpers.UserNamedGraphUri(id)} {
               |sc:${resource} a ${correctData.clothingType} ;
               |${asStringForSPARQL("sc:hasColour", correctData.colors)} ;
               |${asStringForSPARQL("sc:hasTextileComposition", correctData.fabrics)} ;
               |sc:isSuitableToBeDressedByGenre ${correctData.genre} ;
               |sc:hasTexture ${asXSDString(correctData.texture)} ;
               |sc:hasSize ${asXSDString(correctData.size)} ;
               |sioc:note ${asXSDString(correctData.note)} . }}""".stripMargin

          SimpleSPARQL.insert(queryString)
          Created(s"Item ${resource} was created!")
        }
      )
    }
  }

}
