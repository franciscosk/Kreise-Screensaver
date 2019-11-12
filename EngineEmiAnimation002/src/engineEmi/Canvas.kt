package engineEmi

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window

class Canvas{
    fun init(): HTMLCanvasElement {
        val canvas = document.createElement("canvas") as HTMLCanvasElement
        val context = canvas.getContext("2d") as CanvasRenderingContext2D
        context.canvas.width  = window.innerWidth.toInt();
        context.canvas.height = window.innerHeight.toInt();
        document.body!!.appendChild(canvas)
        return canvas
    }

}

