package engineEmi

object Animations{
    fun run(){
        Engine.canvasElements.map { it.animate() }
    }
}