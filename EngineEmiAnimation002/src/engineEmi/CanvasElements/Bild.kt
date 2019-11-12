package engineEmi.CanvasElements

import engineEmi.CanvasElement
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.Image

open class Bild(var src: String = "",
           posX: Double = 0.0,
           posY: Double = 0.0,
           context: CanvasRenderingContext2D? = null
) : CanvasElement(posX = posX, posY = posY, context = context) {

    override val height : Double
        get() {
            return 100.0
        }

    override val width : Double
        get() {
            return 100.0
        }

    override fun callConcreteDrawMethod() {
        var image = Image()
        image.src = src
        context?.drawImage(image, posX, posY)
    }
}