import { Container, Stack, useColorMode } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router";
import Footer from "../components/footer";


export default function Main({ children }) {
	const { colorMode, toggleColorMode } = useColorMode()
	const { asPath } = useRouter();

	const variants = {
		out: {
			opacity: 0,
			x: 40,
			y: 0,
			transition: {
				duration: 0.25
			}
		},
		inactive: {
			opacity: 0,
			x: 0,
			y: 40,
			transtion: {
				duration: 0.25
			}
		},
		in: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.25,
				delay: -5
			}
		}
	}

	return(
		<>
			<Navbar />
			<Container
			maxW="100vw"
			p={0}
			// pt={2}
			bg={colorMode === 'light' ? 'dark.100' : 'light.100'} >

			<AnimatePresence
			initial={false}
			exitBeforeEnter >
				<motion.div
				key={asPath}
				variants={variants}
				animate="in"
				initial="inactive"
				exit="out" >
					<Container
					maxW={650}
					minH={"100vh"}
					py={"60px"}
					m="auto"
					bg={colorMode === 'light' ? 'dark.200' : 'light.200'} >
						<Stack spacing={4} pt={2}>
							{children}
							<Footer/>
						</Stack>
					</Container>
				</motion.div>
			</AnimatePresence>
			
			</Container>
		</>
	)
}